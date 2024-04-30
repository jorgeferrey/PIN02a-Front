import React from 'react'

const Acordeon = () => {
  return (
    <div>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Beneficios de viajar por el mundo:
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Ampliar horizontes y perspectivas: </strong>Viajar te permite salir de tu burbuja y experimentar nuevas realidades, culturas y formas de vida. Esto te ayuda a ser más abierto, tolerante y comprensivo con los demás, y a apreciar la diversidad del mundo. <br />
                    <strong>Enriquecer el conocimiento:</strong> Cada lugar que visitas te enseña algo nuevo, ya sea sobre historia, arte, arquitectura, religión, gastronomía o simplemente sobre cómo viven las personas en otras partes del mundo. <br />
                    <strong>Mejorar la salud mental y física:</strong> Viajar reduce el estrés, la ansiedad y la depresión. Te ayuda a relajarte, desconectar de la rutina y disfrutar del presente. Además, la actividad física que implica viajar, como caminar o explorar nuevos lugares, es beneficiosa para tu salud física. <br />
                    <strong>Fortalecer las relaciones:</strong> Viajar con amigos o familiares puede fortalecer los lazos y crear recuerdos invaluables. También puedes conocer gente nueva en tus viajes y hacer amigos de todo el mundo. <br />
                    <strong>Desarrollar habilidades:</strong> Viajar te obliga a salir de tu zona de confort y adaptarte a nuevas situaciones. Esto te ayuda a desarrollar habilidades como la resolución de problemas, la comunicación intercultural y la independencia. <br />
                    <strong>Conocerse a sí mismo:</strong> Viajar te permite reflexionar sobre tu propia vida y valores. Puede ayudarte a descubrir quién eres y lo que quieres de la vida.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Información para el viajero
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Ante de viajar</strong> Define tu destino, fechas de viaje, presupuesto, actividades que deseas realizar y tipo de alojamiento. Investiga sobre el clima, cultura, costumbres y posibles riesgos del lugar. <br />
                    <strong>Documentos:</strong>Revisa la vigencia de tu pasaporte y visa (si es necesario). Obtén los seguros de viaje y vacunas requeridas. <br />
                    <strong>Reservas:</strong>Reserva con anticipación vuelos, alojamiento, transporte interno y actividades. <br />
                    <strong>Equipaje</strong>:Prepara tu maleta con ropa y calzado adecuados para el clima y actividades. No olvides incluir artículos de higiene personal, medicamentos y documentos importantes. <br />
                    <strong>Dinero:</strong>Cambia dinero a la moneda local o retira efectivo de cajeros automáticos. Informa a tu banco sobre tu viaje para evitar problemas con las tarjetas.
                </div>
                </div>
            </div>        
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Documentación
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Controla tus Documentos.</strong> <strong>Pasaporte:</strong>Debe ser válido por al menos 6 meses después de la fecha de tu regreso.<br />
                    
                </div>
                </div>
            </div>
        </div>
    </div>
    )
    }

export default Acordeon
