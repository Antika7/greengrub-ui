import React from 'react';
import { Box, Typography, Paper, Divider, TextField, FormControl, InputLabel, Select, MenuItem, Button, Stack } from '@mui/material';
import AppTheme from '../../shared-theme/AppTheme';
import ColorModeSelect from '../../shared-theme/ColorModeSelect';

export default function Settings() {
  return (
    <AppTheme>
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Appearance
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="body1">Theme mode:</Typography>
              <ColorModeSelect size="small" />
            </Stack>
          </Paper>
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Something
            </Typography>
            <Stack spacing={2}>
              <TextField label="ABCD" variant="outlined" fullWidth size="small" />
              <TextField label="ABCD" variant="outlined" fullWidth size="small" type="email" />
              <FormControl fullWidth size="small">
                <InputLabel id="language-label">Language</InputLabel>
                <Select labelId="language-label" label="Language" defaultValue="en">
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Hindi</MenuItem>
                  <MenuItem value="fr">Bengali</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-end', mt: 1 }}>
                Save Changes
              </Button>
            </Stack>
          </Paper>
        </Box>
    </AppTheme>
  );
}