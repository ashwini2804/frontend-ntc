import React, { useState } from 'react'
import { createContext,useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { UserContext } from './App'

export default function Signup() {
  // const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [pass,setPass] = useState()
  const url= "http://localhost:8080/users"

  const {name,setName} = useContext(UserContext)

  const handleSignup = async () =>{
    const result = await axios.post(url,{name:name,email:email,pass:pass})
    Navigate ("/Main");
  }
    const Navigate = useNavigate();

    const handleSubmit = () =>{
        Navigate('/login')
    }
  return (
   
    <div>Signup

       <p>
        <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Name'></input>
     </p>
    <p>
            <input type='text' onChange={(e) => setEmail(e.target.value)}placeholder='Enter Email'></input>
    </p>
    <p>
    <input type='password' onChange={(e) => setPass(e.target.value)} placeholder='Enter Password'></input>
    </p>

        <button onClick={handleSignup}>Signup</button>
        <hr></hr>
        
        <button onClick={handleSubmit}>Already a member? Login Here..</button>
    </div>
  )
}
