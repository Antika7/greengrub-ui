import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Profile() {
  const skills = [
    "UI",
    "Android",
    "iOS",
    "Python",
    "Javascript",
    "Sketch",
    "Photoshop",
    "C#",
    "Illustrator",
    "PHP",
    "Linux",
    "UX",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>

      {/* TOP PROFILE CARD */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={{ xs: 5, sm: 10, md: 15, lg: 20 }} alignItems="center" justifyContent="space-between">
          
          {/* Avatar */}
          <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Avatar
              src="https://randomuser.me/api/portraits/women/44.jpg"
              sx={{ width: 90, height: 90 }}
            />
          </Grid>

          {/* Name + Role */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Svetlana Anyukova
            </Typography>

            <Typography color="text.secondary">
              Full Stack Web Developer
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button variant="contained" sx={{ mr: 1 }}>
                Contact
              </Button>
              <Button variant="outlined">Resume</Button>
            </Box>
          </Grid>

          {/* Rate */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6">$44/hr</Typography>
          </Grid>

          {/* Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="body2">Availability: Full-time</Typography>
            <Typography variant="body2">Age: 32</Typography>
            <Typography variant="body2">Location: Russia</Typography>
            <Typography variant="body2">Experience: 6 years</Typography>
            <Box sx={{my: '5px'}}>
              <IconButton sx={{mr: '7px'}}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{mr: '7px'}}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{mr: '7px'}}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

        </Grid>
      </Paper>

      {/* MAIN SECTION */}
      {/* About */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography fontWeight="bold" mb={1}>
          About
        </Typography>

        <Typography color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          molestie sem vitae aliquet sodales. Sed vitae ligula sed ex
          fringilla fermentum.
        </Typography>
      </Paper>

    </Container>
  );
}