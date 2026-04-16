

import React, { use } from 'react'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const App = () => {

  const user = localStorage.getItem("user");
  return (
    
      
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>

      <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to='/'/> }/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App