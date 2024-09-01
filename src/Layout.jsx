import React from 'react'
import LawyerNavbar from './components/Lawyer/LawyerNavbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <LawyerNavbar/>
      <Outlet/>
    </div>
  )
}
