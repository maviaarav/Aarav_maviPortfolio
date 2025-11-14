import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function clicked(event){
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function handleMenuClick() {
    const navbar = document.querySelector('.navbar'); 
    const logo = document.querySelector('.logo');
    const btn_menu = document.getElementById('menu-btn');
    const result = navbar.classList.toggle('expanded');
    navbar.style.height = result ? '60px' : '350px';
    btn_menu.textContent = result ? 'Menu' : 'Close';
}

function Navbar() {
    return (
        <>
        <div className='navbar'>
            <div className='logo'>Portfolio</div>  
            <button type='menu' id='menu-btn' onClick={handleMenuClick}>Close</button> 
            <div className='links'>
                <Link to="/" onClick={clicked}>Home</Link>
                <Link to="/about" onClick={clicked}>About</Link>
                <Link to="/journey" onClick={clicked}>Journey</Link>
                <Link to="/projects" onClick={clicked}>Projects</Link>
                <Link to="/contact" onClick={clicked}>Contact</Link>
                <Link to="/resume" id='resume-btn' onClick={clicked}>Resume</Link>
                
            </div>
        </div>
        </>
    )
}
export default Navbar;