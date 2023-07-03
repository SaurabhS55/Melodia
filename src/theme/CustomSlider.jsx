import React from 'react'
import Slider from '@mui/material/Slider'
import { styled, useTheme } from '@mui/material/styles'
const CustomSlider = styled(Slider)(({ theme }) => ({
        color: theme.palette.primary.main, // Change the color of the slider track
        '& .MuiSlider-track': {
            backgroundColor: 'white', // Default color of the filled section of the slider track
            '&:hover': {
              backgroundColor: '#5fe884', // Color of the filled section of the slider track on hover
            },
          },
          '& .MuiSlider-thumb': {
            display: 'none', // Hide the slider thumb by default
          },
          '&:hover, &.Mui-focused': {
            '& .MuiSlider-thumb': {
              display: 'block', // Show the slider thumb when hovering over the track or when it is focused
              color:"white",
            },
            '& .MuiSlider-track': {
                backgroundColor: '#5fe884',
            },
    
        },
      }));


export default CustomSlider