import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginForm from './components/Client/LoginForm.jsx'
import SignupForm from './components/Client/SignupForm.jsx'
import Home from './components/Client/Home.jsx'
import RiseIssue from './components/Client/RiseIssue.jsx'
import LawyerLogin from './components/Lawyer/LawyerLogin.jsx'
import LawyerRegister from './components/Lawyer/LawyerRegister.jsx'
import Layout from './Layout.jsx'
import Pending from './components/Lawyer/Pending.jsx'
import Submitissue from './components/Lawyer/Submitissue.jsx'
import LawerHome from './components/Lawyer/LawyerHome.jsx'
import Contactus from './components/Client/Contactus.jsx'
import Service from './components/Client/Service.jsx'
import LawyerSolution from './components/Lawyer/LawyerSolution.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
 <>
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/signup' element={<SignupForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/riseIssue' element={<RiseIssue/>}/>
      <Route path='/lawyerLogin' element={<LawyerLogin/>}/>
      <Route path='/lawyerRegister' element={<LawyerRegister/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/service' element={<Service/>}/>

      
    </Route>
    <Route path='/lawyer' element={<Layout/>}>
    <Route path='/lawyer/' element={<LawerHome/>}/> 
    <Route path='/lawyer/pending' element={<Pending/>}/>
    <Route path='/lawyer/submitissue' element={<Submitissue/>}/>
    <Route path='/lawyer/solution' element={<LawyerSolution/>}/>

    </Route>
 </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
