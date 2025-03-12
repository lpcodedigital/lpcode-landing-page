import '../../styles/Home.css';
const Home = () => {
    return (
        <section className="section">
        <div className="hero">
                <h1>Bienvenido a LPCode</h1>
                <p>Desarrollamos soluciones digitales innovadoras para potenciar tu negocio.</p>
                {/* <button>Descubre más</button> */}
            </div>

            <div className="features">
                <h2>Nuestras Soluciones</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <img className="img-section" src="./images/soluciones.jpg" alt="Desarrollo de Apps" />
                        <h3>Desarrollo de Apps</h3>
                        <p>Desarrollo de aplicaciones móviles (iOS y Android).</p>
                        <p>Creación de plataformas web modernas y escalables.</p>
                        <p>Integración de APIs y soluciones en la nube.</p>
                        <p>Desarrollo de software a medida para empresas.</p>
                        <p>Seguridad y optimización de aplicaciones digitales.</p>
                    </div>
                    <div className="feature-item">
                        <img className="img-section" src="./images/Clientes.jpg" alt="Integraciones con APIs" />
                        <h3>Impacto y Clientes</h3>
                        <p>A lo largo de los años, LPCode ha colaborado con diversas empresas en sectores como:</p>
                        <ul>
                            <li><strong>Salud y bienestar</strong> – Aplicaciones para gestión de pacientes y médicos.</li>
                            <li><strong>Automotriz</strong> – Software de control de vehículos y check-in de talleres.</li>
                            <li><strong>Finanzas</strong> – Herramientas de gestión y análisis financiero.</li>
                            <li><strong>E-commerce</strong> – Tiendas en línea y plataformas de venta.</li>
                            <li><strong>Hoteleria</strong> - Cadenas de hoteles y turismo</li>
                        </ul>
                    </div>
                    <div className="feature-item">
                        <img className="img-section" src="./images/soluciones2.jpg" alt="Soluciones Empresariales" />
                        <h3>Soluciones Empresariales</h3>
                        <p>Implementamos software a medida para optimizar los procesos de tu empresa.</p>
                        <p>Nuestro enfoque es comprender las necesidades de cada negocio y desarrollar soluciones personalizadas que aporten valor real a nuestros clientes.</p>
                    </div>

                    {/* <div className="gallery">
  <img src="/images/office.jpg" alt="Nuestro equipo trabajando" />
  <img src="/images/app-development.jpg" alt="Desarrollo de aplicaciones" />
  <img src="/images/team-meeting.jpg" alt="Reunión de planificación" />
</div> */}
                </div>
            </div>
        </section>
    );
};
export default Home;
