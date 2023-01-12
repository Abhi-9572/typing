import { Box,TextField,Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext'
import { auth } from '../firebaseConfig';

const LoginForm = ({handleClose}) => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const{theme}=useTheme()

    const handleLogin=()=>
    {
        console.log(email,password);

        auth.signInWithEmailAndPassword(email,password)
        .then((ok)=>
        {
            alert("user login")
            handleClose()
        })
        .catch((err)=>
        {
            alert("somthing went wrong")
            handleClose()
        })
    }
  return (
    <Box
    p={3}
    style={{
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        backgroundColor:'transparent',
        padding:10,
        marginTop: '5px'
    }}    
>
    <TextField
        variant='outlined'
        type='email'
        label='Enter Email'
        onChange={(e)=>setEmail(e.target.value)}
        
        InputLabelProps={
            {
                style:{
                    color: theme.title
                }
            }
        }
        InputProps={{
            style:{
                color: theme.title
            }
        }}
        
    >
    
    </TextField>
    <TextField
        variant='outlined'
        type='password'
        label='Enter password'
        onChange={(e)=>setPassword(e.target.value)}
        InputLabelProps={
            {
                style:{
                    color: theme.title
                }
            }
        }
        InputProps={{
            style:{
                color: theme.title
            }
        }}
       >
    
    </TextField>
    <Button
    variant='contained'
    size='large'
    style={{backgroundColor:theme.title, color: theme.background}}
    onClick={handleLogin}
    >
        Login
    </Button>
</Box>
  )
}

export default LoginForm