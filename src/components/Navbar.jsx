import React from 'react'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'
import {Link,useLocation} from 'react-router-dom'


const Navbar = () => {
  const location = useLocation();

  return (
    <Stack 
      direction="row" 
      justifyContent="space-around"
      sx={{ gap: {sm: '122px' , xs: '40px'}, mt: {sm: '32px',xs: '20px'}, justifyContent: 'none',alignItems:'center'}}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        alignItems="flex-end"
        fontSize="24px"
      >
        <Link to="/" style={{ textDecoration: 'none', borderBottom: '2px solid #FF2625', color: '#3A1212'}}>Home</Link>
        <a href="#exercise" style={{ textDecoration: 'none', color: '#3A1212'}}>{location.pathname === '/' && 'Exercises'}</a>
      </Stack>

    </Stack>
  )
}

export default Navbar