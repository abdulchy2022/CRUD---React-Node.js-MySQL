import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import adduser from './AddUser.css'
import axios from 'axios'
import {Button,
        Container,
        Box,
        TextField,
        IconButton 
       } from '@mui/material';

import PublishIcon from '@mui/icons-material/Publish';




const AddUser = () => {


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");    
  const navigate = useNavigate();

  const SubmitHandler =async ()=> {

    axios.post("http://127.0.0.1:8082/add",{
          name: name,
          email: email,
          contact: contact  
        })
        .then(navigate('/'))
  };
s
  return (

    <div>
        <Container maxWidth="sm" className="AddUser">
        <Box
        component="form"
        sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
        noValidate
        >
          <h1>Add  New User</h1>

          <form className="f_">
              <TextField 
                      id="outlined-basic" 
                      label="Name" 
                      variant="outlined" 
                      type="text"
                      name = "name"
                      value = {name}
                      onChange={(e)=>{setName(e.target.value);}}
              />
              <TextField 
                      id="outlined-basic" 
                      label="contact" 
                      variant="outlined" 
                      type="text"
                      name = "email"
                      value = {email}
                      onChange={(e)=>{setEmail(e.target.value);}}
              
              />
              <TextField 
                      id="outlined-basic" 
                      label="contact"
                      variant="outlined" 
                      type="text"
                      name = "contact"
                      value = {contact}
                      onChange={(e)=>{setContact(e.target.value);}}
              />
           
              <Button className = "sub_button" variant="contained"  onClick={SubmitHandler}> Submit </Button>
          </form>
    
        </Box>
      </Container>       
    </div>
  )
}

export default AddUser