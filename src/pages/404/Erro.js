import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

import erroImg from "./assets/error.svg";


const Erro = () => (

        
        <div className="allignPage">
        <section className="erro404">
            <img className="img" src={erroImg} alt="erro 404"/>

            <div className="erroTxt">
                <h1>OOOPS... ERRO - 404 -</h1>
                <p>Desculpe, mas tenho más noticias, a página que você tentou acessar não foi localizada ou não exite.</p>
                <button className="button"><Link to="/">Retornar a página inicial</Link></button>
            </div>
        </section>
       
  
    </div>

);
export default Erro;

