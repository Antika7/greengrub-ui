import React from 'react';
import { Box, Typography } from '@mui/material';
import AppTheme from '../../shared-theme/AppTheme';

export default function Profile() {
  return (
    <AppTheme>
        <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
            User Profile
        </Typography>
        <Typography variant="body1">
            This is a placeholder for the user profile page.
        </Typography>
        </Box>
    </AppTheme>
  );
}