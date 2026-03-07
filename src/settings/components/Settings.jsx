import React from 'react';
import { Box, Typography } from '@mui/material';
import AppTheme from '../../shared-theme/AppTheme';

export default function Settings() {
  return (
    <AppTheme>
        <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
            Settings
        </Typography>
        <Typography variant="body1">
            This is a placeholder for the settings page.
        </Typography>
        </Box>
    </AppTheme>
  );
}