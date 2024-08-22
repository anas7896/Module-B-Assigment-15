    import { Button, Paper, TextField, Typography } from '@mui/material';
    import axios from 'axios';
    import React, { useEffect, useState } from 'react'
    import { useNavigate, useParams } from 'react-router-dom' 

    const EditUser = () => {

        const {id} = useParams();
        const [edituser,Setedituser] = useState({})
        const navigate = useNavigate();

        useEffect(()=>{
            axios.get(`http://localhost:3000/users/${id}`)
        .then(res => Setedituser(res.data))
        .catch(err => console.log(err))
            }, [])

        const handleSubmit = (e) => {
            e.preventDefault()
            axios.put(`http://localhost:3000/users/${id}`,edituser)
        .then((res) => {
            alert("User Update Successfully");
            navigate('/')
        })
        .catch(err => console.log(err))
        };


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <Paper elevation={24} sx={{ margin:20,padding:5}}>
                <Typography sx={{marginBottom:5}}>
                    Edit User
                </Typography>
                <TextField fullWidth  variant="outlined" required  sx={{mb:3}} onChange={(e)=>Setedituser({...edituser,name:e.target.value})} value={edituser.name}/>
                <TextField fullWidth variant="outlined" required  sx={{mb:3}} onChange={(e)=>Setedituser({...edituser,username:e.target.value})}value={edituser.username}/>
                <TextField fullWidth type='email' variant="outlined" required sx={{mb:3}} onChange={(e)=>Setedituser({...edituser,email:e.target.value})} value={edituser.email}/>
                <TextField fullWidth  variant="outlined" required sx={{mb:3}} onChange={(e)=>Setedituser({...edituser,phone:e.target.value})} value={edituser.phone}/>
                <Button fullWidth type="submit" variant="contained" color="primary">Submit</Button>
            </Paper>
        </form>
        </div>
    )
    }

    export default EditUser