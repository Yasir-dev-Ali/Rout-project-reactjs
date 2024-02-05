import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Nav from './Components/Nav/Nav'
import NotFound from './Components/NotFound'
import Service from './Components/Services/Service'
import Contact from './Components/Contact/Contact'
// import './App.css'

function App() {
  
  return (
   <>
    <Nav />
  <Routes>
    {/* <Route path="/" element={<Nav/>} /> */}
    <Route path="/" element={<Hero/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Service/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
   </>
  )
}

export default App
