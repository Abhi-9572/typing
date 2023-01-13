import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Modal, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useTheme } from '../Context/ThemeContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

const useStyle=makeStyles(()=>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)'
    },
    box: {
        width: 400,
        textAlign: 'center',
        border: '1px solid'
    }
}))

const AccountIcon = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0)

    const navigate=useNavigate()
    const handleValueChange = (e, v) => {
        setValue(v)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logOut=()=>{
        auth.signOut()
        .then((ok)=>
        {
            alert("logged out")
        })
        .catch((err)=>
        {
            alert("not able to log out")
        })
    }
    
    const[user]=useAuthState(auth)
    const handleAccountIconClick=()=>
    {
        console.log("ll");
        if(user)
        {
            navigate("/user")
        }
        else
        {
            setOpen(true);
        }
    }
    

    const classes=useStyle();
      const {theme} = useTheme();
    return (
        <div>
            <AccountCircleIcon onClick={handleAccountIconClick} />
           { user && <LogoutIcon onClick={logOut} style={{marginLeft:"8px"}}/>} 
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <div className={classes.box}>
                    <AppBar
                     position="static"
                     style={{backgroundColor:'transparent'}}
                    >
                        <Tabs
                            value={value}
                            onChange={handleValueChange}
                            variant="fullWidth"
                        >
                            <Tab label="login"  style={{color:theme.title}}></Tab>
                            <Tab label="Signup"  style={{color:theme.title}}></Tab>
                        </Tabs>

                    </AppBar>
                    {value == 0 && <LoginForm handleClose={handleClose}/>}
                    {value == 1 && <SignupForm handleClose={handleClose}/>}
                </div>

            </Modal>
        </div>

    )
}

export default AccountIcon