import React from 'react';
import './style.css';
import proj1 from "./assets/proj1.png"
import proj2 from "./assets/proj2.png"
import proj3 from "./assets/proj3.png"
/* import proj4 from "./assets/proj4"
 */
const Portifolio = () =>(

   <div className="contentPortfolio">

   <h1 className="title">Portifólio</h1>

   <div className="projInfo">

      <img className="projImg shadowBox" src={proj1}/>
      <article>

         <h2>Gerador de Mensagens</h2>
         <p>Um gerador simples de mensagem utilizando JavaScript e Arrays.</p>
        
         <div>
         <a href="https://github.com/alisonmelo/Gerador-de-mensagens">Repositório</a> <a href="https://alisonmelo.github.io/Gerador-de-mensagens/">Vizualizar</a>
         </div>

      </article>
   
        
   
      </div>



      <div className="projInfo">
       <img className="projImg shadowBox"src={proj2}/>
            <article>
               <h2>Error 404 Page</h2>
               <p>Uma belissima página de erro 404.
                  para treinar um pouco de flex
               </p>
               <div>
               <a href="https://github.com/alisonmelo/Erro-404">Repositório</a> <a href="https://alisonmelo.github.io/Erro-404/">Vizualizar</a>
               </div>

            </article>
               
      </div>

      <div className="projInfo">
         < img className="projImg shadowBox" src={proj3}/>
         <article >
            <h2>Projeto</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur magna commodo lectus malesuada scelerisque. Integer et sollicitudin erat, et facilisis quam. Phasellus scelerisque</p>
               
               <div>
                  <a href="https://github.com/alisonmelo/playPedraPapelTesoura">Repositório</a> <a href="https://alisonmelo.github.io/playPedraPapelTesoura/">Vizualizar</a>
               </div>
         </article>

       
      </div>
         
   
   </div>

);

export default Portifolio;