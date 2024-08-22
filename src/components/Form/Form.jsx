import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react' 

const Form = () => {
    const [NewUser, setNewUser] =useState({
        name: "",
        username: "",
        email: "",
        phone: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(NewUser)
        axios.post('http://localhost:3000/users',NewUser)
        .then(res => alert("User Create Successfully"))
        .catch(err => console.log(err))
    }
  return (
    <form onSubmit={handleSubmit}>
    <Paper elevation={24} sx={{ margin:20,padding:5}}>
        <Typography sx={{marginBottom:5}}>
            Create User Form
        </Typography>
        <TextField fullWidth label="Name" variant="outlined" required  sx={{mb:3}} onChange={(e)=>setNewUser({...NewUser,name:e.target.value})}/>
        <TextField fullWidth label="UserName" variant="outlined" required  sx={{mb:3}} onChange={(e)=>setNewUser({...NewUser,username:e.target.value})}/>
        <TextField fullWidth label="Email" type='email' variant="outlined" required sx={{mb:3}} onChange={(e)=>setNewUser({...NewUser,email:e.target.value})}/>
        <TextField fullWidth label="Phone"  variant="outlined" required sx={{mb:3}} onChange={(e)=>setNewUser({...NewUser,phone:e.target.value})}/>
        <Button fullWidth type="submit" variant="contained" color="primary">Submit</Button>
    </Paper>
    </form>
  )
}

export default Form