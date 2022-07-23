import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Typography, Stack } from '@mui/material'
import ExerciseCard from '../components/ExerciseCard'
import { ArrowUpward } from '@mui/icons-material'
import {fetchData,exerciseOptions} from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behaviour: 'smooth' })
  }

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      let exercisesData = [];

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      }

      setExercises(exercisesData)
    }

    fetchExerciseData()

  },[bodyPart])

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px"
    >
      {exercises.length >= 1 ? (
        <Typography variant="h4" mb="45px">
          Showing Results
        </Typography>
      ) : (
        <Typography variant="h4" mb="5px">
          Search Exercises <ArrowUpward />
        </Typography>
      )}

      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            shape="rounded"
            color="standard"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises