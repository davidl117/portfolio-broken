import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// import { Link } from "react-router-dom";

export default function Navigation() {

    const[menuOpen, setIsOpen] = useState(false);
    console.log(menuOpen)

    function toggleMenu() {
        setIsOpen(prevOpen => !prevOpen)
    };

    return (
        <nav className="nav-container">
            <button className={` ${menuOpen ? "menu-open": ""}`}>
                <FontAwesomeIcon 
                             onClick={toggleMenu}
                             className="ham-bars" 
                             icon={faBars}
                />
            </button>
            <div className={` ${menuOpen ? "menu-open li-display": "li-none"}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="work">My Work</a>
                </li>
                <li>
                    <a href="contact">Contact</a>
                </li>
            </div>
        </nav>
    )
}

