import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [flag, setFlag] =useState(false)
  return (
    <UserContext.Provider value={{flag,setFlag}}>
        {children}
    </UserContext.Provider>
  )
}
