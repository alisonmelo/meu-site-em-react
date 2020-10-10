import React from "react";
import foto from "./foto.png"
import "./style.css"


const About =()=>(

<div className="contentAbout">

<div className="about">
    <img className="imgAbout shadowBox" src={foto} alt="foto Alison Melo"/>
<div className="text">
    <h3>Sobre Min</h3>
   <h2>
    Quem sou Eu
  </h2>
  <p>Me chamo Alison Melo, sou estudande de Front-End e Designer Freelancer, Sou de Pernambuco, porem tenho um pezinho na Paraiba.
      Amo design e tecnologia e decidir unir ambas as coisas ainda estou no inicio dessa caminhada e venho aqui para mostrar um pouco da minha historia.
  </p>
   <p>
        Estou buscando se aprimorar, sou formado em design gráfico e no ano de 2020 decidi dá um foco em entra na área de tecnologia, agarrando todas as oportunidades que me aparecem como o curso START da Rede Cidadã e na faculdade onde consegui uma bolsa de estudo para cursar Analise e desenvolvimento de sistemas, espero aprender muito e repassar boa parte do que eu tenho aprendido.
   </p> 
</div>
</div>

<section className="cv">
<article className="educ">
    <h2>Educação</h2>

    <div> 
        <h3>Front-End | Start Latam (Rede Cidadã e Accenture) - Término Out/2020</h3>
    <ul>
        <p>- Módulo Ambientação na Plataforma (Canvas) - 16 horas</p>
        <p>- Módulo Inteligência Emocional Parte I e II - 60 horas</p>
        <p>- Lógica de Programação - 120 horas</p>
        <p>- Módulo Específico - 172 horas</p>
    </ul>
    
    </div>
<h3>Sistemas para Internet | FICR 2020.1 - Expectativa de término 2021.2 (Graduação / Tecnologo)
</h3>
<h3>Design Gráfico | Faculdade dos Guararapes 2018.1 -  Término 2019.2 (Graduação / Tecnologo) </h3>
<h3>Tec. Comp. Gráfica | Gracom School of Visual Effects 2017.1 - 2019.1 | OpenCG 
Curso de computação gráfica e manuseio das ferramentas do pacote Adobe. 
</h3>
</article>
<article className="exp">
<h2>Experiências Profissionais</h2>
<h3>Freelancer - 2016 - Atual - Designer</h3>
<p>Realizava trabalhos ou assessorando nas áreas de web design, design gráfico e mídia social.  </p>
<h3>Prolinfo UPE - 2019.2 - Atual - Professor Estagiário</h3>
<p>estagio onde esponho ferramentas de design e o basico de Design Gráfico.
</p>
</article>
</section>

</div>


); 
export default About;