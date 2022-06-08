import React from 'react';
import MainImg from './Components/MainImg';
import Details from './Components/Details';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
    <div className="card-container">
      <div className="items-div">
      <MainImg />
      <Details />
      <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
