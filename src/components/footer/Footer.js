import React from 'react';
import './style.css';
import behance from './assets/behance.svg';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import github from './assets/github.svg';

const Footer = () =>(

<footer className="footer">
    <div className="container">
        <h4>Alison Melo</h4>
        <ul className="social">
<li><a href="https://www.linkedin.com/in/alisonmtmelo/"><img src={linkedin}/></a></li>
<li><a href="https://www.behance.net/alisonmelo"><img src={behance}/></a></li>
<li><a href="https://github.com/alisonmelo"><img src={github}/></a></li>
<li><a href="https://www.instagram.com/_di_melo_/"><img src={instagram}/></a></li>

        </ul>
        <p>&copy; 2020 <a className="linkFooter" href="https://github.com/alisonmelo">Alison Melo</a></p> 
    </div>
   
</footer>

);

export default Footer;