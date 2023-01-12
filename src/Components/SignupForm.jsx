import { Box,TextField,Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext'
import { auth } from '../firebaseConfig';

const SignupForm = ({handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const{theme}=useTheme()

   
    const handleSubmit=()=>
    {
        // console.log("y");
        auth.createUserWithEmailAndPassword(email,password).then((ok)=>
        {
            alert("user created")
            handleClose();
        })
        .catch((err)=>
        {
            alert("not able to create")
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
        padding:10
    }}    
>
    {/* <TextField
        variant='outlined'
        type='text'
        label='Enter username'
        onChange={(e)=>setUsername(e.target.value)}
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
    
    </TextField> */}
    <TextField
        variant='outlined'
        type='email'
        label='Enter email'
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
        }}>

    </TextField>
    <TextField
        variant='outlined'
        type='password'
        label='Confirm password'
        onChange={(e)=>setConfirmPassword(e.target.value)}
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
        }}>
    
    </TextField>
    <Button
    variant='contained'
    size='large'
    style={{backgroundColor:theme.title, color: theme.background}}
    onClick={handleSubmit}
    >
        Signup
    </Button>
</Box>
  )
}

export default SignupForm