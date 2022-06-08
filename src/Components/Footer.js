import React from "react";
import '../App.css';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return(
        <>
        <div className="footer-container">
            <div className="footer-items">
                <a href="-"><FaTwitterSquare /></a>
                <a href="https://www.facebook.com/profile.php?id=100011788699161"><FaFacebookSquare /></a>
                <a href="-"><FaInstagramSquare /></a>
                <a href="https://www.linkedin.com/in/usama-nayab-378253220/"><FaLinkedin /></a>
                <a href="https://github.com/usama-nayab"><FaGithubSquare /></a>
            </div>
        </div>
        </>
    )
}
