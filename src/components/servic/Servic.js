import React from "react"
import './servic.css';
import rasm from "../../asset/sr.svg"
import rasmm from "../../asset//sd.svg"
import svg from "../../asset/ere.svg"
function Servic(){
    return(
        <div>
   <div className="servic">
    <div className="container">
        <p className="servic__item">WHAT WE DO</p>
        <p className="servic__title">Our Service</p>
        <div className="servic__wrapper">

            <div className="servic__card">
                <div className="servic__box">
                    <img src={rasm} alt="foto"/>
                    <p className="servic__text">Interior Design</p>
                </div>
                <p className="servic__p">Lorem ipsum dolor amet consectetur
adipiscing elit sed eiusmod tempor
incididunt ut labore.</p>
            </div>

            <div className="servic__card">
                <div className="servic__box">
                    <img src={svg} alt="foto"/>
                    <p className="servic__text">Architecture</p>
                </div>
                <p className="servic__p">Lorem ipsum dolor amet consectetur
adipiscing elit sed eiusmod tempor
incididunt ut labore.</p>
            </div>

            <div className="servic__card">
                <div className="servic__box">
                    <img src={rasmm} alt="foto"/>
                    <p className="servic__text">Planning</p>
                </div>
                <p className="servic__p">Lorem ipsum dolor amet consectetur
adipiscing elit sed eiusmod tempor
incididunt ut labore.</p>
            </div>

        </div>
    </div>
   </div>
        </div>
    )
}
                    
export default Servic