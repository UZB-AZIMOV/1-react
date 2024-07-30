import React from "react"
import './sayt.css';

function Servic(){
    return(
        <div>
  <div className="sayt">
    <div className="container">
        <p className="sayt__item">TESTIMONIALS</p>
        <p className="sayt__title">Client says about us</p>
        <div className="sayt__wrapper">

            <div className="sayt__card">
                <div className="sayt__box">
                    <p className="sayt__text">Louis Saville</p>
                    <p className="sayt__p">/CEO at Google inc</p>
                </div>
                <p className="sayt__p">Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua.</p>
            </div>

            <div className="sayt__card">
                <div className="sayt__box">
                    <p className="sayt__text">Rekha Varadwaz </p>
                    <p className="sayt__p">/Manager at Nike inc</p>
                </div>
                <p className="sayt__p">Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua.</p>
            </div>

        </div>
    </div>
  </div>
        </div>
    )
}
                    
export default Servic