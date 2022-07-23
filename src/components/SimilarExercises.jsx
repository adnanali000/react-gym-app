import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography  mb={5} ml="25px" sx={{mt: {lg:'10px',xs:'100px'},fontSize:{lg:'50px',xs:'30px'}}}>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }

      </Stack>

      <Typography  mb={5} ml="25px" sx={{mt: {lg:'10px',xs:'100px'},fontSize:{lg:'50px',xs:'30px'}}}>
          Exercises that use the same equipment
        </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises