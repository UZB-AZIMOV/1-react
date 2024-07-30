import React from "react"
import './market.css';
import rasm from "../../asset/Mask Group (1).svg"
import rasmm from "../../asset/Mask Group (2).svg"

function Market(){
    return(
        <div>
   <div className="market">
    <div className="container">
        <div className="market__wrapper">

        <div className="market__card">
<img className="market__img" src={rasm} alt="foto" />
<p className="market__title">Years Of Successful
Working
The Market</p>
<button className="years__btn">READ MORE</button>

        </div>

    <div className="market__card">
<img className="market__img" src={rasmm} alt="foto" />
      
    </div>
   
    </div>
    </div>
   </div>
        </div>
    )
}
                    
export default Market