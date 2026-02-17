import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../App.css';

const Navbar = () => {


    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [sidebar, setSidebar] = useState(false);
    const menuPath = "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z";
    const closePath = "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z";
    const [menuIcon, setMenuIcon] = useState(menuPath);
    const toggleMenu = () => {
        sidebar ? setSidebar(false) : setSidebar(true);
        sidebar ? setMenuIcon(menuPath) : setMenuIcon(closePath);
        
    } 

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">Chloe Velez</a>
            </div>

            <div className="navbar-right">
                <ul className={sidebar? '' : 'hide-sidebar'}>
                    <li><a onClick={toggleMenu} href="#education-container">Education</a></li>
                    <li><a onClick={toggleMenu} href="#experience-container">Experience</a></li>
                    <li><a onClick={toggleMenu} href="#project-container">Projects</a></li>
                    <li><a onClick={toggleMenu} href="#contact-container">Contact</a></li>
                </ul>
            </div>

            <div className='sidebar-button'>
                <svg onClick={toggleMenu}
                    xmlns="http://www.w3.org/2000/svg" height="30px"
                    viewBox="0 -960 960 960" width="30px" fill="#cc4589"><path 
                    d={menuIcon}/>
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;