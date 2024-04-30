import React from 'react'
import "./Style.css";

const Ofertas = () => {
  return (
    <div>
          <link rel="stylesheet" href="./style.css"/>
            <header>
              <div className="titulo-ofertas">
                  <p className="titulo-ofertas">Viajes para Tí</p>
              </div>
            </header>
          <main>
              <div className="tarjetas">
                  <img src="./assets/londres_640.jpg" className="imgTarjetas" alt="Londres-Paris-Barcelona"/>
                  <h2>Londres-Paris-Barcelona     usd 4.500</h2>
                  <p>
                      Londres, París, Barcelona: Un viaje inolvidable
                      Descubre la magia de Europa con este tour imperdible.
                      Recorre las calles de Londres, admira la Torre Eiffel y disfruta del encanto de Barcelona.
                      Reserva ahora y vive una experiencia única.
                  </p>
              </div>
              <div className="tarjetas">    
                  <img src="./assets/oslo_640.jpg" className="imgTarjetas" alt="Oslo-Noruega"/>
                  <h2>Suiza y Noruega            usd 3.500</h2>
                  <p>
                      Suiza y Noruega: Un viaje inolvidable
                      Descubre la majestuosidad de los Alpes suizos y la belleza natural de los fiordos noruegos.
                      Recorre pueblos encantadores, disfruta de actividades al aire libre y deléitate con la gastronomía local.
                      Reserva ahora y vive una experiencia única.
                  </p>
              </div>
              <div className="tarjetas">    
                  <img src="./assets/brandenburg_640.jpg" className="imgTarjetas" alt="Berlín-Madrid-Roma"/>
                  <h2>Berlin-Madrid-Roma usd 4.500</h2>
                  <p>
                    Descubre Berlín, Madrid y Roma. Un viaje que combina historia, cultura y pasión.
                    Recorre las murallas de Berlín, pasea por el Retiro madrileño y déjate cautivar por el Coliseo romano.
                    Reserva tu aventura hoy y vive una experiencia única.
                  </p>
              </div>
              <div className="tarjetas">    
                  <img src="./assets/lions_640.jpg" className="imgTarjetas" alt="Ciudad del Cabo y Johannesburgo"/>
                  <h2>Ciudad del Cabo y Johannesburgo usd 4.300 </h2>
                  <p>
                    Descubre Sudáfrica: Ciudad del Cabo y Johannesburgo
                    Aventura natural y urbana en un solo viaje
                    Montaña Table, Robben Island, Soweto, Kruger... ¡Te espera una experiencia única!
                    Reserva ya tu viaje y vive una aventura inolvidable.
                    Promoción especial: 10% de descuento reservando antes del [10/07/2024]
                  </p>
              </div>
              <div className="tarjetas">    
                  <img src="./assets/japan_640.jpg" className="imgTarjetas" alt="Japón"/>
                  <h2>Japón - usd 4.000</h2>
                  <p>
                    Descubre Japón: tradición y tecnología en un mismo viaje.
                    Sumérgete en la milenaria cultura japonesa, recorre sus vibrantes ciudades y templos ancestrales. Experimenta la fascinación de su tecnología de vanguardia y disfruta de su deliciosa gastronomía.
                    Reserva tu aventura oriental. ¡Te esperamos!
                  </p>
              </div>
          </main>
    </div>
  )

}

export default Ofertas
