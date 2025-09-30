// import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Authentication/signup';
import Login from './Authentication/login';
import HomePage from './homePage';
function App() {
  
  return (
    <>
      <Router>
        <div className='container'> 
          <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/homePage' element={<HomePage/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
