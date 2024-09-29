import "../Footer.css";
import Logo from "../Assets/logo_punto_azul_pq.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo Punto Azul" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="https://puntoazulpanaderia.online">Volver a punto azul.</a>
          <p>Descubre la calidad de nuestros productos.</p>
          <p>¡Para más información contactanos!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
