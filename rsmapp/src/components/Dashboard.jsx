import { HighQuality } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const h1s = {
    fontSize: '55px',
    marginTop: '-2px',
    paddingTop: '390px'
}

const Dashboard = () => {
  return (
   <div style={{ 
            backgroundImage: `url(https://img.freepik.com/free-photo/abstract-blur-coffee-shop-cafe-interior_74190-6342.jpg?w=1060&t=st=1710579770~exp=1710580370~hmac=9c27043ff233385d5a1884a2bc5777038638b07f64b0c2e640e722401f0bf22b)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '1000px',
            color: '#333333',
            border: 'solid'


        }}><Navbar/>
            {
                <h1 style={h1s} >Welcome to Resto Cafe</h1>
            }
        </div>
  )
}

export default Dashboard