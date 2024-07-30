import React from "react"
import './bag.css';

function Bag(){
    return(
        <div>
<div className="bag">
<div className="container">

<p className="bag__title">DON’T FORGET TO SIGN UP</p>
<div className="book">
<div className="hr"></div>
</div>
<p className="bag__item">Find out early about all upcoming promotions and new product releases with
our newsletter.</p>
<div className="book">
<div className="bag__box">
    <input className="bag__inp" type="text" placeholder="Enter your email address....." />
    <button className="bag__btn">SUBSCRIBE</button>
</div>
</div>
</div>
</div>
        </div>
    )
}
                    
export default Bag