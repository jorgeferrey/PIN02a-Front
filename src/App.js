import React,{useRef} from 'react';
import "./App.css"
import BotonScrollTop from './components/boton/BotonScrollTop';
import Carrusel from './components/carrusel/Carrusel';
import Inicio from './components/paginas/Inicio';
import Presentacion from './components/paginas/Presentacion';
import Ofertas from './components/paginas/Ofertas';
import Registros from './components/paginas/Registros';
<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"></link>

const App=()=> {
  const inicio=useRef(null);
  const ofertas=useRef(null);
  const registros=useRef(null);

  const scrollToSection = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };
  return(
  
   <div className="contenedor-app">
      <BotonScrollTop />
        <div className="contenedor-menu">
          <ul>
            <li onClick={()=>scrollToSection(inicio)} className="menu-item">
              Inicio
            </li>
            <li onClick={()=>scrollToSection(ofertas)} className="menu-item">
              Ofertas
            </li>
            <li onClick={()=>scrollToSection(registros)} className="menu-item">
              Registros
            </li>
           
          </ul>
        </div>
        <div ref={inicio} className="inicio">
            <Inicio />
        </div>
        <div>
          <Presentacion />
        </div>
        <div ref={ofertas} className="ofertas">
            <Ofertas />
        </div>
        <div ref={registros} className="registros">
            <Registros />
        </div>
        <div>
          <Carrusel />
        </div>       
   </div>
  );
}

export default App;
