// import { useState } from 'react'
import './common.css';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
} from "firebase/firestore";
function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className='authContainer'>
        <div className='centerContent'>
          <h4 className='label'>Email Address</h4>
          <input type='text' placeholder='Enter your Email' className='inputField'/>
          <h4 className='label'>Username</h4>
          <input type='text' placeholder='Enter your password' className='inputField'/>
          <button onClick={()=>navigate('/homePage')}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login;
