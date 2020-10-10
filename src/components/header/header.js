import React from "react";
import "./style.css"
import {Link} from "react-router-dom";


const Header = () => (

    
        <nav className="header shadowBox">
        <div className="containerNav">
        <h2>Alison Melo</h2>
 <ul className="menu">
     <li className="menuIten"><Link to="/">Home</Link></li>
     <li className="menuIten"><Link to="/portfolio">Portfólio</Link></li>
     <li className="menuIten"><Link to="/about">Sobre min</Link></li>
     <li className="menuIten"><Link to="/contact">Contato</Link></li>
 </ul>
        </div>
        </nav>
  






); 

export default Header;