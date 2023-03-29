import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"


export default function Navigation() {

    const[menuOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prevOpen => !prevOpen)
    };

    function closeMenu() {
        toggleMenu(false)
    }

    return (
        <nav className="nav-container">
            <button className={` ${menuOpen ? "menu-open transition": "menu-close transition"}`}>
                <FontAwesomeIcon 
                             onClick={toggleMenu}
                             className="ham-bars" 
                             icon={faBars}
                             />
            </button>
            <div className={` "li-display" ${menuOpen ? "li-display": "li-none"}`}>
                <li className="menu-link">
                    <Link to="/" onClick={() => closeMenu()}>Home </Link>
                </li>
                <li className="menu-link">
                    <Link to="/work" onClick={() => closeMenu()}>My Work</Link>
                </li>
                <li className="menu-link">
                    <Link to="/contact" onClick={() => closeMenu()}>Contact</Link>
                </li>
            </div>
        </nav>
    )
}

