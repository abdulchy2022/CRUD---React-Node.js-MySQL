

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import React,{useEffect,useState} from 'react'; 

import UserList from './components/UserList/UserList'
import AddUser from './components/AddUser/AddUser'
import UpdateUser from './components/UpdateUser/UpdateUser'





function App() {




  return (
  
   
   
    <Router>
      <Routes>

          <Route exact path="/" element={<UserList/>} />
          <Route exact path="/add" element={<AddUser/>} />
          <Route exact path="/:id/update" element={<UpdateUser/>} />
    
          
          
      </Routes>
    
    </Router>
  );
}

export default App;
