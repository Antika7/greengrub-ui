//Contribute Popover.jsx
import React from 'react';
import 
{   
Dialog, 
DialogTitle, 
DialogContent, 
DialogActions, 
Button, 
Slide,
TextField,
Box,
Typography
} 
from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContributePopover = ({ open, onClose, item }) => {
  const handleContribute = () => {
    // Handle the contribution logic here
    onClose();
  };

  return (
    <Dialog  
        fullScreen
        // fullWidth
        // maxWidth="sm"
        open={open} 
        onClose={onClose}
        slots={{
          transition: Transition,
        }}
        sx={{width: '70%', height: '70%', py: 2, mx: 'auto', mt: '5%', '& .MuiDialog-paper': {
          margin: 'auto',
          borderRadius: 3,
        }}}
    >
      <DialogTitle>Contribute to "{item.title}"</DialogTitle>
      <DialogContent>
        {/* Display Details Requester */}
        <Box sx={{ p: 2 }}>
            <Typography variant="body2"><strong>Requested By:</strong> {item.requestedBy}</Typography>
            <Typography variant="body2"><strong>Quantity Needed:</strong> {item.quantity}</Typography>
            <Typography variant="body2"><strong>Description:</strong> {item.description}</Typography>
        </Box>
        {/* Name of Contributor */}
        <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
        {/* Quantity to contribute */}
        <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            inputProps={{
                min: 0,
                max: item.quantity ?? 0,
            }}
            helperText={`Enter a value between 0 and ${item.quantity ?? 0}`}
        />
        {/* Any other details */}
        <TextField label="Additional Details" variant="outlined" fullWidth margin="normal" multiline rows={4} />
        {/* Image Upload */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: 'center' }}>
            <Button variant="contained" component="label" sx={{ mt: 2 }}>
                Upload Image of Food
            <input type="file" hidden />
            </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleContribute} color="primary">
          Send To Requester
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContributePopover;