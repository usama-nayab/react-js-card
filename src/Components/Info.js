import React from "react";
import "../App.css";
import { FaEnvelope } from "react-icons/fa";

export default function Info() {
    return(
        <>
        <div className="info-container">
            <h4>Usama Nayab</h4>
            <p>Frontend Developer</p>
            <a href="https://www.linkedin.com/in/usama-nayab-378253220/">usama.website</a>
            <button className="email-button" >
                 <FaEnvelope /> <p> Email </p>
                 </button>
        </div>
        </>
    )
}