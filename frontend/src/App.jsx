import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import UserLogout from './pages/UserLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element ={<Home/>} />
        <Route path = '/login' element ={<UserLogin/>} />
        <Route path = '/signup' element ={<UserSignup/>} />
        <Route path = '/captain-login' element ={<CaptainLogin/>} />
        <Route path = '/captain-signup' element ={<CaptainSignup/>} />
        <Route path = '/home' element ={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        } />
        <Route path = '/user/logout' element ={UserLogout} />
      </Routes>
    </div>
  )
}

export default App
