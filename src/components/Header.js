import React, { useState } from "react";
import hamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";

export default function Header(){
    const [toggle, setToggle] = useState(false);

    return(
        <header>
            <div className="logo-icon">
                <img src={logo} alt="sunnyside agency"/>
            </div>
            <nav className={`${toggle ? 'toggle-nav' : 'hide'}`}>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li className="callTo-btn">Contact</li>
                </ul>
            </nav>
            <div 
                className="logo-icon menu"
                onClick={() => setToggle(!toggle)}
                >
                <img src={hamburger} alt="menu"/>
            </div>
        </header>
    )
}