import React from 'react';
import './style.css';
import behance from './assets/behance.svg';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import github from './assets/github.svg';

const Contact = () =>(
<div className="contact">
    <div className="contactInfo">

    <h3>Onde você pode me encontrar?</h3>
<h2>Contatos</h2>
<h3>Emails</h3>
<p>Alisonmelo99@hotmail.com</p>
<p>Alisonmelo1999@gmail.com</p>
<h3>Telefone</h3>
<p>+55 81 9 84766552</p>
<h3>Redes Sociais</h3>
<ul className="socialContact">
<li><a href="https://www.linkedin.com/in/alisonmtmelo/"><img src={linkedin}/></a></li>
<li><a href="https://www.behance.net/alisonmelo"><img src={behance}/></a></li>
<li><a href="https://github.com/alisonmelo"><img src={github}/></a></li>
<li><a href="https://www.instagram.com/_di_melo_/"><img src={instagram}/></a></li>

        </ul>
    </div>
</div>
    );
export default Contact;