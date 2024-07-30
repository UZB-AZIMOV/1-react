import React from "react"
import './header.css';
import { IoMenu } from "react-icons/io5";
import rasm from "../../asset/Screenshot_3 [Recovered] 1.svg"
function Header(){
    return(
        <div>
             <header className="header">
        <div className="container">
            <div className="navbar">
                <div>
<img className="navbar__img" src={rasm} alt="foto" />
</div>
                <ul className="navbar__collection">
                    <li className="navbar__item">
                        <a href="#" class="navbar__link">
                            <span>HOME</span>
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" class="navbar__link">
                            <span>  PROJECT  </span>
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>   SERVICES </span>
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#" className="navbar__link">
                            <span> ABOUT    </span>
                        </a>
                    </li>

                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>  BLOG    </span>
                        </a>
                    </li>

                    
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>   SHOP   </span>
                        </a>
                    </li>

                    
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>      CONTACT</span>
                        </a>
                    </li>

                    
                  

    <button className="navbar__btn">Sign Up</button>
                </ul>
                <div className="navbar__menu">
                    <IoMenu className="menu"/>
                </div>
            </div>
        </div>
    </header>
        </div>
    )
}


                                
export default Header