import React from 'react';
import '../App.css';
import UsamaImg from '../images/usama2.jpg';

export default function MainImg(){
    return(
        <>
        <div className="img-container">
            <img className='profile-img' src={UsamaImg} alt="" />
        </div>
        </>
    )
}