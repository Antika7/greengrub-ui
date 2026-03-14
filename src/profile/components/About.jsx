import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Icon,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AppTheme from "../../shared-theme/AppTheme";
import ImageCarousel from "../../shared-components/ImageCarousel";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import CompostIcon from '@mui/icons-material/Compost';
import PeopleIcon from '@mui/icons-material/People';
import RadarIcon from '@mui/icons-material/Radar';

export default function About() {

  const sliderImages = [
    // "https://i.redd.it/imujak5khjag1.jpeg",
    "https://images.pexels.com/photos/3758017/pexels-photo-3758017.jpeg",
    "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU7scTdS2aabbQTMMzaSzC_E8sJivaPM4Yw&s",
    "/assets/saveFood.jpeg"
  ];

  return (
    <AppTheme>
      <Container maxWidth="md">

        {/* Carousel */}
        <Box sx={{ mt: 3 }}>
          <ImageCarousel 
            images={sliderImages} 
            height={400}
            width="100%"
          />
        </Box>

        {/* About Content */}
        <Box sx={{ py: 4, mb: 100, overflow: 'auto', minHeight: '100vh' }}>
          <Typography variant="h1" gutterBottom fontWeight="bold" align="center" sx={{fontSize: "24px"}}>
            About Us
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: "16px", lineHeight: 1.6, textAlign: "center" }}>
            GreenGrub is inspired by the urgent need to address food waste across India — a country where millions face hunger daily, yet enormous amounts of food are discarded.
            <br /><br />
            A future where no meal goes to waste and no one sleeps hungry.
            <br /><br />
            GreenGrub isn't just an app — it's a movement towards mindful living, environmental responsibility, and stronger communities.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  perspective: "1000px",
                  width: 250,
                  height: 180,
                  "&:hover .inner": {
                    transform: "rotateY(180deg)",
                  },
                }}
              >
                <Box
                  className="inner"
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      p: 2,
                      boxShadow: 3,
                    }}
                  >
                    <CardContent>
                      <Box sx={{ minHeight: 1, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h4">Our Mission</Typography>
                        <RadarIcon fontSize="large" color="success" sx={{ mt: 2 }} />
                      </Box>

                    </CardContent>
                  </Card>

                  {/* Back */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      // height: 240,
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      p: 2,
                      boxShadow: 3,
                      bgcolor: "success.light",
                      overflowY: "auto",
                    }}
                  >
                    <CardContent>
                      <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                        To create a culture where surplus food is shared, not wasted.
                      </Typography>
                      {/* <List dense sx={{ maxHeight: 100, overflowY: 'auto' }}>
                        <ListItem disableGutters sx={{ pr: 1 }}>
                          <ListItemText primary="Reduce food wastage at scale" />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Support hunger relief initiatives" />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Build community-driven sustainability" />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Promote responsible consumption" />
                        </ListItem>
                      </List> */}
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  perspective: "1000px",
                  width: 250,
                  height: 180,
                  "&:hover .inner": {
                    transform: "rotateY(180deg)",
                  },
                }}
              >
                <Box
                  className="inner"
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      p: 2,
                      boxShadow: 3,
                    }}
                  >
                    <CardContent>
                      <Box sx={{ minHeight: 1, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h4">What We Do</Typography>
                        <CompostIcon fontSize="large" color="success" sx={{ mt: 2 }} />
                      </Box>

                    </CardContent>
                  </Card>

                  {/* Back */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      p: 2,
                      boxShadow: 3,
                      bgcolor: "success.light",
                    }}
                  >
                    <CardContent sx={{textAlign: 'center'}}>
                      {/* <Typography variant="h6">Our Mission</Typography> */}
                      <Typography variant="body2" align="center">
                        GreenGrub makes food sharing easy, safe, and responsible.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  perspective: "1000px",
                  width: 250,
                  height: 180,
                  "&:hover .inner": {
                    transform: "rotateY(180deg)",
                  },
                }}
              >
                <Box
                  className="inner"
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      p: 2,
                      boxShadow: 3,
                    }}
                  >
                    <CardContent>
                    <Box sx={{ minHeight: 1, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                      <Typography variant="h4">Who For</Typography>
                      <PeopleIcon fontSize="large" color="success" sx={{ mt: 2 }} />
                    </Box>
                    </CardContent>
                  </Card>

                  {/* Back */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: 240,
                      maxHeight: 320,
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      p: 2,
                      boxShadow: 3,
                      bgcolor: "success.light",
                      overflowY: "auto",
                    }}
                  >
                    <CardContent>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        GreenGrub is built for communities across India, including:
                      </Typography>
                      <List dense sx={{ maxHeight: 100, overflowY: 'auto' }}>
                        <ListItem disableGutters sx={{ pr: 1 }}>
                          <ListItemText primary="Individual Homes" secondary="Cooked extra? Share it instead of throwing it away." />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Wedding & Event Organizers" secondary="Redirect large quantities of untouched surplus food." />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Corporate Offices" secondary="Share excess catering responsibly." />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Charities & NGOs" secondary="Access available food for distribution." />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Animal Shelters" secondary="Collect suitable surplus food for rescued animals." />
                        </ListItem>
                        <ListItem disableGutters>
                          <ListItemText primary="Restaurants & Caterers" secondary="Reduce waste while giving back to the community." />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Grid>

          </Grid>

          {/* // Socials */}
          <Typography variant="h4" gutterBottom fontWeight="bold" align="center" my={4}>
              Connect with us
          </Typography>
          <Grid 
              container 
              spacing={12}
              direction="row" 
              sx={{
                justifyContent: "center",
                alignItems: "center",
                mb: 32,
              }}>
            <Grid item>
              {/* Facebook */}
              <IconButton color="primary" onClick={() => window.open("https://www.facebook.com/greengrub", "_blank")}>
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              {/* Instagram */}
              <IconButton color="primary" onClick={() => window.open("https://www.instagram.com/greengrub", "_blank")}>
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              {/* Twitter */}
              <IconButton color="primary" onClick={() => window.open("https://www.twitter.com/greengrub", "_blank")}>
                <TwitterIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>

        </Box>

      </Container>
    </AppTheme>
  );
}