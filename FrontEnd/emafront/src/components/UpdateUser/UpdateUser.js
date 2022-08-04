import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useParams,useNavigate} from 'react-router-dom';

function UpdateUser() {
  
 
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [contact,setContact] = useState();
  
  const {id} = useParams(); 
  const navigate = useNavigate();

  
  const fetchUserList = async ()=> {

        const {data} = await axios.get(`http://127.0.0.1:8082/api/get/${id}`);

        setName(data[0].name);  
        setEmail(data[0].email);
        setContact(data[0].contact);  
       
        
  } 


  useEffect(() => {
     fetchUserList()
  },[id])
  

  
  const UpdateDetails = async () => {

    axios
        .put(`http://127.0.0.1:8082/put/${id}`,{
          name,
          email,
          contact,  
        })
        .then(navigate('/'))
  
        
   } 
  
  

  return (
    <div  className="container">
      <h1> Update  </h1>

        <form>
            <input
              type = "text"
              name="name"
              value={name}
              onChange={(e)=> {setName(e.target.value);}}  
            />
            
            <input
              type = "text"
              name="email"
              value={email}
              onChange={(e)=> {setEmail(e.target.value);}}  
            />

            <input
              type = "text"
              name="contact"
              value={contact}
              onChange={(e)=> {setContact(e.target.value);}}  
            />
            <button onClick={UpdateDetails} >Update</button>
        </form>
    </div>
  )
}

export default UpdateUser