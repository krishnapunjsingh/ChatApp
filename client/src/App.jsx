import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import { Toaster} from "react-hot-toast"
import HomePage from './pages/HomePage'
import { AuthContext } from '../context/authContext'

const App = () => {
  const { authUser } = useContext(AuthContext);

  return (


    <div className="bg-[url('/bgImage.svg')] bg-contain">
      <Toaster />
      <Routes>
        
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/login' element={!authUser ? <LoginPage /> :  <Navigate to="/" />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App

