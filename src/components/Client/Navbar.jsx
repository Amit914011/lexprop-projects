'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/riseIssue',
  },
  {
    name: 'Service',
    to: '/service',
  },
  {
    name: 'Contact',
    to: '/contactus',
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  let [isOpen,setIsOpen] =useState(false)
  let [isOpen1,setIsOpen1] =useState(false)
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
         <h1 className='text-3xl  text-blue-500 font-bold'>Logo</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
         <ul className='flex justify-center items-center'>
          <li
            className="rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-5 cursor-pointer relative w-36 text-center"
            onClick={()=>setIsOpen1(!isOpen1)}
          >
            Register
            <ul className={`mt-6 absolute left-0 ${isOpen1?"block":"hidden"}`}  >
              <li className='w-36'>
              <Link to='/signup' className="rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer">Client Register</Link></li>
              <li className='mt-4'>
              <Link to='/lawyerRegister' className="rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer mt-2">Lawyer Register</Link></li>
            </ul>
          </li>
          <li
            className="rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer relative"
            onClick={()=>setIsOpen(!isOpen)}
          >
            Login
            <ul className={`mt-5 absolute left-0 ${isOpen?"block":"hidden"}`}  >
              <li className="rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer">
              <Link to='/login'>Client Login</Link></li>
              <li  className="rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer mt-2">
              <Link to='/lawyerLogin'>Lawyer Login</Link>
              </li>
            </ul>
          </li>
         </ul>
         
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                  <h1 className='text-3xl  text-blue-500 font-bold'>Logo</h1>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
               <ul className='mt-5'>
                <li > <Link 
                to='/signup'
                  className="mt-4 w-full rounded-md bg-blue-500  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Register
                </Link></li>
                <li className='mt-5'> <Link 
                to='/signup'
                  className="mt-4 w-full rounded-md bg-blue-500  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Login
                </Link></li>
               </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

















