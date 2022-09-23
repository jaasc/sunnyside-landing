import React from "react";
import arrow from "../images/icon-arrow-down.svg";
import Header from "./Header";

export default function Hero(){
    return(
        <div className="hero-container">
            <Header/>
            <h1>We are Creatives</h1>
            <img 
                src={arrow} 
                alt="arrow down"
                className="hero-arrow"/>
        </div>
    )
}