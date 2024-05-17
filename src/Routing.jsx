import React from 'react'
import { Routes,Route } from "react-router"
import Homepage from './Components/Homepage'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'


const Routing = () => {
  return (
    <Routes>
    <Route  path='/' element={<Homepage/>}  />
    <Route path='Homepage' element={<Homepage/>} />
    <Route path='Aboutus' element={<Aboutus/>} />
    <Route path='Contactus' element={<Contactus/>} />
    
      
    
    </Routes>
  )
}

export default Routing
