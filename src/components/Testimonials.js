import React from "react";
import clients from "../clients";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";

export default function Testimonials(){
    // eslint-disable-next-line
    const clientImages = [emily, thomas, jennie]

    const reviews = clients.map(client => 
        <div 
            key={client.id} 
            className="testimonial-reviewer"
            >
            <img src={client.img} alt={client.name}/>
            <p>{client.review}</p>
            <h4>{client.name}</h4>
            <p className="reviewer-title">{client.title}</p>
        </div>
)

    return(
        <div className="testimonials">
            <h3>Client Testimonials</h3>
            <div className="testimonial-list">
                {reviews}
            </div>
        </div>
    )
}