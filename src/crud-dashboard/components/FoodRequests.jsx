import * as React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';

import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ShareIcon from '@mui/icons-material/Share';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import { useNavigate } from 'react-router';
import { useDialogs } from '../hooks/useDialogs/useDialogs';
import useNotifications from '../hooks/useNotifications/useNotifications';
import {
  deleteOne as deleteFoodRequest,
  getMany as getFoodRequests,
} from '../data/foodRequests';
import PageContainer from './PageContainer';

export default function FoodRequests() {
  const navigate = useNavigate();
  const dialogs = useDialogs();
  const notifications = useNotifications();

  const [foodRequests, setFoodRequests] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadData = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getFoodRequests({
        paginationModel: { page: 0, pageSize: 100 },
        sortModel: [],
        filterModel: { items: [] },
      });

      setFoodRequests(result.items);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const handleCreate = () => {
    navigate('/foodRequests/new');
  };

  const handleContribute = async (item) => {
    const confirmed = await dialogs.confirm(
      `Do you want to contribute to "${item.title}"?`,
      {
        title: 'Food Request?',
        severity: 'error',
        okText: 'Contribute',
        cancelText: 'Cancel',
      },
    );

    // if (!confirmed) return;

    // try {
    //   await deleteFoodRequest(item.id);

    //   notifications.show('Food request deleted successfully.', {
    //     severity: 'success',
    //     autoHideDuration: 3000,
    //   });

    //   loadData();
    // } catch (err) {
    //   notifications.show(`Failed to delete: ${err.message}`, {
    //     severity: 'error',
    //   });
    // }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'success';
      case 'Closed':
        return 'error';
      default:
        return 'warning';
    }
  };

  return (
    <PageContainer
      title="Food Requests"
      breadcrumbs={[{ title: 'Food Requests' }]}
      actions={
        <Stack direction="row" spacing={1}>
          <Tooltip title="Refresh">
            <IconButton onClick={loadData}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleCreate}
          >
            Create
          </Button>
        </Stack>
      }
    >
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error.message}
        </Alert>
      )}

      {isLoading ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {foodRequests.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="160"
                    image="/assets/biryani.jpg"
                    alt={item.title}
                  /> */}
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        Quantity: {item.quantity}
                      </Typography>

                      <Typography variant="body2">
                        Requested By: {item.requestedBy}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 , mb: 2}}>
                      <Chip
                        label={item.status}
                        color={getStatusColor(item.status)}
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <IconButton onClick={() => handleContribute(item)}>
                    <HandshakeIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="chat">
                    <QuestionAnswerIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </PageContainer>
  );
}