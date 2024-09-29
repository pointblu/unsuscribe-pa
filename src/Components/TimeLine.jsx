import "../Timeline.css"; // Archivo CSS externo para el estilo

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Paso 1: Contacta al administrador</h3>
            <p className="primary-text-b">
              Envía un correo electrónico a{" "}
              <strong>puntoazulpanaderia@gmail.com</strong> solicitando que tu
              cuenta sea desincorporada de la aplicación.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Paso 2: Motivo de la baja</h3>
            <p className="primary-text-b">
              En el cuerpo del correo, incluye el motivo de tu baja,
              seleccionando una de las siguientes opciones:
            </p>
            <ul>
              <li>No uso la aplicación</li>
              <li>He encontrado una alternativa mejor</li>
              <li>Problemas con el servicio</li>
              <li>Preocupaciones sobre la privacidad</li>
              <li>Otro (por favor, especifica)</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Paso 3: Confirmación de recepción</h3>
            <p className="primary-text-b">
              Recibirás un correo confirmando que hemos recibido tu solicitud.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Paso 4: Tiempo de procesamiento</h3>
            <p className="primary-text-b">
              Tu cuenta será desuscrita en un periodo no mayor a 72 horas. Te
              notificaremos cuando el proceso esté completo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
