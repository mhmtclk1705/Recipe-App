import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarContainer } from './style'
const Navbar = () => {
  return (
    <NavbarContainer>
        <div className="navbar-left">
            <NavLink to="/"> <i> {"<CLARUSWAY>"} </i> <span>RECIPE</span></NavLink></div>
        <div className="navbar-right">
            <NavLink to='/about'>ABOUT</NavLink>
            <a href="https://github.com/mhmtclk1705">GITHUB</a>
            <NavLink to='/login'>LOGOUT</NavLink>

        </div>
    </NavbarContainer>
  )
}

export default Navbar