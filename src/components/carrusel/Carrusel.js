import React from 'react';


const Carrusel = () => {
  return (
    <div>
      <div id="carrusel" className="carousel slide">
          <div className="carousel-indicators">
          <button type="button" data-bs-target="#carrusel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carrusel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carrusel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">

              <div className="carousel-item active">
                  <div className="carousel-caption d-none d-md-block">  
                     <h5>Viajar es la mejor inversión que realizas en tí mismo</h5>
                     <p>
                       Viajar no solo te lleva a lugares increible, sino que te transforma como persona. Expande tu mente, abre tu corazón y te llena de experiencias únicas. Es la mejor inversión en ti mismo, un reagalo invaluable que te enriquece para siempre.          Descubre culturas, conoce gente, prueba sabores, desafía tu rutina y aprende a adaptarte. Cada viaje te abre un mundo nuevo y te acerca a la mejor versión de ti mismo. ¡Atrévete a explorar y descubrir la magia de viajar!"
                     </p>
                  </div>
                   <img src="./assets/mar_1280.jpg" className= "d-block" width= "1450" height="715" alt="..."/>
              </div>

              <div className="carousel-item">
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Las grandes ciudades del mundo</h5>
                      <p>
                        Descubrir las grandes urbes del mundo es una experiencia inigualable. Sumergirse en el ritmo vibrante de Tokio, la majestuosidad de Nueva York o la fascinante historia de Roma te transforma. Cada ciudad ofrece una explosión de sabores, culturas y monumentos que te cautivan. Es un viaje que expande tu mente y te conecta con la diversidad del planeta.
                      </p>
                  </div>
                  <img src="./assets/ciudad_1280.jpg" className= "d-block" width= "1450" height="715" alt="..."/>
              </div>

              <div className="carousel-item">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>Conéctate con la culturas milenarias</h5>
                      <p>
                        Visitar culturas milenarias te transporta a un viaje en el tiempo. Experimentarás tradiciones ancestrales, sentirás la energía de sus monumentos milenarios y te conectarás con la sabiduría ancestral. Un viaje que enriquece el alma y expande tu visión del mundo.
                      </p>
                  </div>
                  <img src="./assets/japon_1280.jpg" className= "d-block" width= "1450" height="715" alt="..."/>
              </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
          </div>
          <div>
      </div>
    </div>
  )
}

export default Carrusel

