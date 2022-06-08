import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import "../App.css";

export default function Details() {
    return(
        <>
        <div className="details-container">
            <Info />
            <About />
            <Interest />
        </div>
        </>
    )
}