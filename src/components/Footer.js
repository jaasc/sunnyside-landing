import React from "react";
import cone from "../images/desktop/image-gallery-cone.jpg";
import milkbottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import logo from "../images/logo.svg";

export default function Footer(){
    return(
        <>
            <div className="before-footer">
                <img src={milkbottles} alt="milkbottles"/>
                <img src={orange} alt="orange"/>
                <img src={cone} alt="cone"/>
                <img src={sugarcubes} alt="sugarcubes"/>
            </div>
            <footer>
                <div className="logo-icon">
                    <img src={logo} alt="sunnyside logo"/>
                </div>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <img src={facebook} alt="facebook"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={pinterest} alt="pinterest"/>
                </div>
            </footer>
        </>
    )
}