import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { sayeerapic } from '@/images';
import { AnimatedPage } from '@/components/Animation/Animations';

function Home() {
  return (
    <div>
      <AnimatedPage>
        <Grid container justifyContent="center" alignItems="center" sx={{ mt: 0, maxHeight: "80vh" }}>
          <Grid item xs={12} sm={10} md={8} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* <Box component="img" src={sayeerapic} sx={{ width: '100%', maxWidth: "100vh", height: 'auto' }} /> */}
            <img src={sayeerapic} style={{width:'40%', height: '15%'}} />
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h6">
          I am Sayeera Shaik, a passionate software engineer with a Master's in Computer Science from the University of Missouri-Columbia. I have led and developed optimized workflow solutions pertaining web applications, APIs, and
           machine learning projects using agile methodologies, and various programming languages, I thrive at solving complex problems and driving innovation.
           </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            You can explore my <Link component={RouterLink} to="/projects">projects</Link>. Feel free to <Link component={RouterLink} to="/contact">contact</Link> me.
          </Typography>
        </Box>
      </AnimatedPage>
    </div>
  );
}

export default Home;
