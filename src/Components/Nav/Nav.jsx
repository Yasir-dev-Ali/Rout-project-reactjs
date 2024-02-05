import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
   
   <div className='container'>
    <div className="logo">
        <h1>Router</h1>
    </div>
    <div className="nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
   </div>
   <div className='btn'>
           <button>Sign In</button>
           <button>Login</button>
        </div>

    </div>
  )
}

export default Nav
