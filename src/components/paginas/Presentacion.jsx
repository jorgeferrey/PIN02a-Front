import React from 'react'
import Acordeon from '../acordeon/Acordeon'

const Presentacion = () => {
  return (
    <div className="contenedor-presentacion-padre">
      <div className="contenedor-presentacion-imagen">
          <img src="./assets/chica_640.jpg" className="imagen-p" alt="Imagen página de Inicio"/>    
      </div>
        
        <div className="contenedor-presentacion-descripcion">
            <p className="presentacion-texto">
                <span style={{fontWeight: "bold", color:"blueviolet",fontSize:"35px"}}>Despierta el viajero que llevas dentro!!! <br /></span>
                <span style={{fontWeight: "bold", color:"red",fontSize:"25px"}}>TurisFly<br /></span>
                <span style={{fontWeight: "bold", color:"blue",fontSize:"20px"}}>Tu puerta de entrada al mundo <br /></span>
                ¿Sientes el cosquilleo de la aventura en tu interior? ¿Sueñas con explorar culturas lejanas y paisajes impresionantes? 
                En <span style={{color:"gray", fontWeight: "bold" }}>TurisFly</span>, somos expertos en convertir esos sueños en realidad.
                Ofrecemos una amplia gama de paquetes turísticos a destinos de todo el mundo, cuidadosamente diseñados para que vivas experiencias inolvidables. Desde safaris en África hasta cruceros por el Caribe, pasando por escapadas a las ciudades más emblemáticas de Europa, tenemos algo para todos los gustos y presupuestos.
                Nuestro equipo de expertos te brindará un trato personalizado y te ayudará a planificar tu viaje perfecto, desde la elección del destino hasta la reserva de vuelos y hoteles. Además, te ofrecemos información completa sobre cada destino, para que puedas aprovechar al máximo tu experiencia.
                No esperes más para descubrir el mundo que te espera. ¡Viaja con <span style={{ color:"gray", fontWeight: "bold"}}>Turisfly</span> y despierta el viajero que llevas dentro!
            </p>
        <div>
          <Acordeon />
        </div>    
        </div>
    </div>
  )
}

export default Presentacion