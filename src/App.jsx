import React from 'react'
import Login from './component/Login'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'


const App = () => {

    const user = (localStorage.getItem('user'))
  return (
    <div>
<BrowserRouter>
<Routes>
        <Route path='/' element={<Login/>} />

<Route path='/dashboard' element={ user ? <Dashboard/> : <Navigate to='/' replace/>} />
</Routes>
</BrowserRouter>

       
    </div>
  )
}

export default App