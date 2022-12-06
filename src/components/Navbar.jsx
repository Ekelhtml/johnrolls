import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo-image.jpg'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={1000}className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="bio" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}>Bio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="slider-container" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}>Galeria</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="demo" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}>Demo</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="social-container" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}>Media</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar