import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack direction="row" gap="5px" justifyContent="center" alignItems="center" px="40" pt="24px">
        <img src={Logo} alt="logo" width="80px" height="40px" style={{marginBottom:'10px'}} />
        <Typography variant="h5" sx={{fontStyle:'italic',fontWeight:'bold',fontFamily:'monospace'}}>AA-Fitness</Typography>
      </Stack>

    </Box>
  )
}

export default Footer