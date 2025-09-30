// import { useState } from 'react'
import './common.css';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
  
  return (
    <>
      <div className='container'>
        <div className='centerContent'>
          <h4 className='label'>Email Address</h4>
          <input type='text' placeholder='Enter your Email' className='inputField'/>
          <h4 className='label'>Password</h4>
          <input type='text' placeholder='Enter your username' className='inputField'/>
          <h4 className='label'>Password</h4>
          <input type='text' placeholder='Enter your password' className='inputField'/>
          <button onClick={()=> navigate('/login')}>Sign Up</button>
        </div>
        <div className='register'>
            <span className='register-label'>Already have an Account? </span>
            <a href='/login'> Sign In</a>
        </div>
      </div>
    </>
  )
}

export default Signup;
