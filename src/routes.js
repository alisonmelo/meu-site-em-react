import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './pages/about/About.js';
import Portifolio from './pages/portfolio/Portifolio.js';
import Contact from './pages/contact/Contact.js';
import Erro from './pages/404/Erro.js';
import Main from './pages/main/main.js';
import Header from './components/header/header.js'
function Routes(){
    return(
<BrowserRouter>
<Header/>
<Switch>
    <Route path="/" exact><Main/></Route>
    <Route path="/contact" component={Contact}/>   
    <Route path="/about" component={About}/>
    <Route path="/portfolio" component={Portifolio}/>
    <Route component={Erro}/>
</Switch>

</BrowserRouter>
);
};


export default Routes;