import React from "react"
import './years.css';
import rasm from "../../asset/Group 73.svg"

function Years(){
    return(
        <div>
   <div className="years">
    <div className="container">
        <div className="years__wrapper">
        <div className="years__card">
<img className="year__img" src={rasm} alt="foto"/>
        </div>
    <div className="years__card">
        <p className="years__item">ABOUT US</p>
        <p className="years__title">Interioris The Will
        of An Epoch Mextreo </p>
        <p className="years__text">There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration in some form injected
humour, or randomised words which don't look even slightly
believable.If you are going to use a passage of Lorem Ipsum,
sure there isn't anything embarrassing hidden the middleof text.
All the Lorem Ipsum generators on the Internettend to repeat
predefined chunks as necessary,making this the first true
generator on the Internet.</p>

<button className="years__btn">LEARN MORE</button>
    </div>
   
    </div>
    </div>
   </div>
        </div>
    )
}
                    
export default Years