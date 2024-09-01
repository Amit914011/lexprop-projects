import React from 'react'
import './App.css'
// import SignupForm from './components/SignupForm'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Client/Navbar'
import Footer from './components/Client/Foooter'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
   <>
   <UserContextProvider>
   <Navbar/>
  <Outlet/>
  <Footer/>
   </UserContextProvider>
   </>
  )
}

export default App
