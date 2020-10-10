import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom';
const Main =()=>(

<div className="contentHome">

<div className="home">
<h3>Olá, Meu nome é</h3>
    <h1>Alison Melo</h1>
    <p>Designer Freelancer & Front End Developer</p>
    
    <div className="Button">
        <Link className="saibaMais" to="/about">Saiba mais</Link>
    </div>

  
</div>
     
        <img className="imgMain shadowBox"src="https://media-exp1.licdn.com/dms/image/C4E03AQETNs5Dmtc3sA/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=Lyh9dlECp_YS2yEF_ye_UJe07ptjycbAzrK8Ym6FLzU" alt="rapaz de oculos"/>
      
</div>



);
export default Main;