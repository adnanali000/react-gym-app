import React from 'react'
import {Box,Typography,Stack} from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos,name}) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: {lg: '130px',xs:'20px'}}} p="20px">
      <Typography variant="h3" mb="10px">
        Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" 
        sx={{
          flexDirection: {lg: 'row'},
          gap: { lg: '80px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0,6).map((item,index)=>(
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreffer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{width:'100%',height:'100%',objectFit:'contain'}} />
            
            <Box>
              <Typography sx={{fontSize: {lg: '20px',xs:'18px'}}} color="#000">
                {item.video.title}
              </Typography>
              <Typography sx={{fontSize: {lg: '18px',xs:'16px'},color:'gray'}}>
                {item.video.channelName}
              </Typography>

            </Box>
          </a>
        ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos