import React, { useState } from 'react';
import { resume } from '@/data/themes';
import { Pic1, Pic2,Pic3 } from '@/images';
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Box, Typography, List, Grid, useMediaQuery,ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AnimatedPage, RotateAnimation } from '@/components/Animation/Animations';

function About() {
  const [buttonHover, setButtonHover] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderResume = () => (
    <Button sx={{ p: 0 }}>
      <Link href={resume} target="_blank" rel="noopener noreferrer" underline="none">
        View my resume
      </Link>
  </Button>
  );
  

  return (
    <AnimatedPage>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={8} sm={4}>
          <Box
            component="img"
            src={Pic1}
            sx={{
              width: '80%',
              maxWidth: '40vh',
              mx: 'auto',
              display: 'block'
            }}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Box
            component="img"
            src={Pic3}
            sx={{
              width: '80%',
              maxWidth: '40vh',
              mx: 'auto',
              display: 'block'
            }}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Box
            component="img"
            src={Pic2}
            sx={{
              width: '80%',
              maxWidth: '40vh',
              mx: 'auto',
              display: 'block'
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '10vh',
          alignItems: 'center',
          my: 2
        }}
      >
        <div onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>
          {buttonHover ? (
            <RotateAnimation>{renderResume()}</RotateAnimation>
            // <RotateAnimation>{renderCertifications()}</RotateAnimation>
          ) : (
            renderResume()

          )}
        </div>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2, px: 2 }}>
        <Typography>
          I worked for Tata Consultancy Services at Hyderabad, India as a Associate Software Engineer where my responsibilities included:
          <List>
            <ListItem>* Developed and rigorously tested RESTful APIs for banking systems using test-driven development methodologies in an agile team environment.</ListItem>
            <ListItem>*Contributed to API documentation and integrated SFMS with Tomcat, MySQL, JSP, and core Java technologies.</ListItem>
            <ListItem>* Managed the entire software development lifecycle, including testing and documentation procedures.</ListItem>
      
          </List>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2, px: 2 }}>
        <Typography>
          I am currently a graduate studentt at the University of Missouri - Columbia. You can view my  <Link component={RouterLink} to="/projects">projects</Link>.
        </Typography>
      </Box>
    </AnimatedPage>
  );
}

export default About;
