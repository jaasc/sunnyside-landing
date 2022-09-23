import React from "react";
import standOut from "../images/desktop/image-stand-out.jpg";
import transform from "../images/desktop/image-transform.jpg";


export default function Features(){
    return(
        <div className="features-container">
            <div className="feature feature-transform">
                <img src={transform} alt="transform"/>
                <div className="feature-detail">
                    <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <button className="btn-more transform">Learn more</button>
                </div>
            </div>
            <div className="feature">
                <img src={standOut} alt="stand out"/>
                <div className="feature-detail">
                    <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <button className="btn-more standout">Learn more</button>
                </div>
            </div>
            <div className="feature-sub">
                <div className="feature-graphic">                    
                    <div className="feature-sub-detail">
                        <h3>Graphic Design</h3>
                        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                </div>
                <div className="feature-photography">
                    <div className="feature-sub-detail">
                        <h3>Photography</h3>
                        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}