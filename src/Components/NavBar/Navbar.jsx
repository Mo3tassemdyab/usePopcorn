import React from 'react'
import Logo from '../Logo/Logo'


export default function Navbar({children}) {

  return <>
   <nav className="nav-bar">
   <Logo/>

    {children}
      </nav>
  </>
    
  
}
