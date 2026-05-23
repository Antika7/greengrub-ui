import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useAuth } from "../../context/AuthContext";
import { getMe } from "../../api/auth";

export default function Profile() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(user);

  useEffect(() => {
    if (!profileData) {
      getMe().then(setProfileData).catch(console.error);
    }
  }, []);

  const name = profileData?.name ?? profileData?.email ?? 'Unknown User';
  const role = profileData?.role ?? '';
  const email = profileData?.email ?? '';

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>

      {/* TOP PROFILE CARD */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={{ xs: 5, sm: 10, md: 15, lg: 20 }} alignItems="center" justifyContent="space-between">

          {/* Avatar */}
          <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Avatar
              sx={{ width: 90, height: 90, bgcolor: 'primary.main', fontSize: 36 }}
            >
              {name.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>

          {/* Name + Role */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>

            <Typography color="text.secondary">
              {role}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {email}
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button variant="contained" sx={{ mr: 1 }}>
                Contact
              </Button>
            </Box>
          </Grid>

          {/* Info */}
          <Grid item xs={12} md={3}>
            <Box sx={{ my: '5px' }}>
              <IconButton sx={{ mr: '7px' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ mr: '7px' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ mr: '7px' }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

        </Grid>
      </Paper>

      {/* About */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography fontWeight="bold" mb={1}>
          About
        </Typography>

        <Typography color="text.secondary">
          Welcome to GreenGrub. Your role is <strong>{role}</strong>.
        </Typography>
      </Paper>

    </Container>
  );
}
