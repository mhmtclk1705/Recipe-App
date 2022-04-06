import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Navbar from '../components/navbar/Navbar'
import Details from '../pages/details/Details'
import About from '../pages/about/About'
import Home from '../pages/home/Home'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        
            <Routes>
                <Route>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/details" element={<Details/>} />
                <Route path="/" element={<Login/>} />
                </Route>
            </Routes>
            
        </BrowserRouter>
    </div>
  )
}

export default AppRouter