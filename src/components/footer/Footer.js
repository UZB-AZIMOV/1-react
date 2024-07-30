import React from "react"
import './footer.css';
import rasm from "../../asset/Screenshot_3 [Recovered] 1.svg"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";



function Bag(){
    return(
        <div>
            <footer className="footer">
<div className="container">
    <div className="footer__wrapper">

    <div className="footer__cad">
        <img src={rasm} alt="foto"/>
        <p className="footer__text bu">But i must explain to you all this mistaken
        idea of dencouncing pleasure.</p>
</div>

<div className="footer__card">
    <p className="footer__title">Quick Links</p>
    <p className="footer__text">About Our Company</p>
    <p className="footer__text">Services WE provide</p>
    <p className="footer__text">Career & Opportunity</p>
    <p className="footer__text">Privacy & policy</p>
    <p className="footer__text">Contact US</p>
</div>

<div className="footer__card">
    <p className="footer__title">Company</p>
    <p className="footer__text">About Company</p>
    <p className="footer__text">Our Testimonials</p>
    <p className="footer__text">Latest News</p>
    <p className="footer__text">Our misson</p>
    <p className="footer__text">Get a free Quot</p>
</div>

<div className="footer__card">
    <p className="footer__title">Contact us</p>
    <p className="footer__text">Sagrada Familia, Herba</p>
    <p className="footer__text">Street Front USA</p>
    <p className="footer__text">brandoxide@gmail.com</p>
    <p className="footer__text">002-568423591</p>
</div>

<div className="footer__card">
<p className="footer__title">Follow Us</p>
<FaFacebook className="icon"/>
<AiFillTwitterCircle className="icon"/>
<IoLogoInstagram className="icon"/>
<FaLinkedin className="icon"/>


</div>
    </div>
</div>
        </footer>
        <div className="footer__bottom">
            <hr/>
            <p className="footer__item">Azimov Abduvoris @ 2020 Brandoxide.all right reserved.</p>
        </div>
        </div>
    )
}
                    
export default Bag