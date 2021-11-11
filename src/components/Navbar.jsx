import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
            <div className="navbar">
            <div className="glow" >UM</div>
            <ul className="navlist">
            <li><div className="navs"><Link to="/" >Home</Link></div></li>
            <li><div className="navs"><Link to="about" >About me</Link></div></li>
            <li><div className="navs"><Link to="skills" >Skills</Link></div></li>
            <li><div className="navs"><Link to="randomvids">Random videos</Link></div></li>
            </ul>
        </div>
        
     
       
        

        
    )
}

export default Navbar