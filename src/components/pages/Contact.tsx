const Contact = () => {
    return (
        <section className="section">
        <h1>Contacto</h1>
            <p>¿Tienes alguna duda? ¡Escríbenos y te responderemos lo antes posible!</p>

            <div className="contact-info">
                <div className="info-item">
                    <img className="img-icon" src="public/images/correo.png" alt="Correo" />
                    <h3>Correo Electrónico</h3>
                    <p>lpcode071294@gamil.com</p>
                </div>
                <div className="info-item">
                    <img className="img-icon" src="public/images/telefono.png" alt="Teléfono" />
                    <h3>Teléfono</h3>
                    <p>+52 56 5911 3784</p>
                </div>
                <div className="info-item">
                    <img  className="img-icon" src="public/images/ubicacion.png" alt="Ubicación" />
                    <h3>Ubicación</h3>
                    <p>Mérida, Yucatán, México</p>
                </div>
            </div>

            {/* <h2>Formulario de Contacto</h2>
            <form className="contact-form">
                <input type="text" placeholder="Tu Nombre" required />
                <input type="email" placeholder="Tu Correo" required />
                <textarea placeholder="Escribe tu mensaje..." required></textarea>
                <button type="submit">Enviar</button>
            </form> */}
        </section>
    );
};
export default Contact;
