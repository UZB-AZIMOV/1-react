import React from "react"
import './from.css';
import rasm from "../../asset/Mask Group (3).svg"
import svg from "../../asset/Mask Group (6).svg"


function From(){
    return(
        <div>
<div className="from">
<div className="container">

<p className="from__item">LETEST NEWS</p>
<p className="from__title">From Our Blog</p>
<div className="from__wrapper">

    <div className="from__card">
        <img className="from__img" src={rasm} alt="foto"/>
        <p className="from__text">2020 Interior Design Trends</p>
        <p className="from__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua.</p>
        <button className="from__btn">CONTINUE READING....</button>
    </div>

    <div className="from__card">
        <img className="from__img" src={svg} alt="foto"/>
        <p className="from__text">28 Notable Product at ARC Interior Design</p>
        <p className="from__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua.</p>
        <button className="from__btn">CONTINUE READING....</button>
    </div>


</div>
</div>
</div>
        </div>
    )
}
                    
export default From