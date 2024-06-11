import React from 'react'
import { Card, CardContent, Typography,Link } from '@mui/material'
import {AnimatedPage} from '@/components/Animation/Animations'
function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' ,color:'white' }}>
    <AnimatedPage>
      <Card sx={{width:"80vh",display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CardContent>
          <Typography sx={{p:1}}>
            Email: sayeerashaik97@gmail.com
          </Typography>
          <Typography sx={{p:1}}>
            Mobile: (+1)573-296-8757
          </Typography>
          <Typography sx={{p:1}}>
            LinkedIn: <Link target="_blank" href="https://www.linkedin.com/in/sayeera-shaik/">LinkedIn</Link>
          </Typography>
          <Typography sx={{p:1}}>
            Github: <Link target="_blank" href="https://github.com/SAYEERA">Github</Link>
          </Typography>
        
        </CardContent>
      </Card>
      </AnimatedPage>
  </div>
  )
}

export default Contact