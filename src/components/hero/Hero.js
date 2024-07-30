import React from "react"
import './hero.css';
import rasmm from "../../asset/Group 63.svg"
function Hero(){
    return(
        <div>
   <div className="hero">
    <div className="container">
        <div className="hero__wrapper">
    <div className="hero__card">
        <p className="hero__item">MODERN INTERIOR</p>
        <p className="hero__title">Create Your
        Interior Design.</p>
        <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation.</p>

<button className="hero__btn">CONTACT</button>
    </div>
    <div className="hero__card">
<img className="hero__img" src={rasmm} alt="foto" />
        </div>
    </div>
    </div>
   </div>
        </div>
    )
}
                    
export default Hero