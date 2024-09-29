import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/logo_punto_azul.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            ¿Cómo desuscribirse de nuestra aplicación?
          </h1>
          <p className="primary-text">
            Queremos asegurarnos de que tu experiencia con nosotros sea lo más
            clara y sencilla posible. Si deseas desuscribirte de nuestra
            aplicación, sigue estos simples pasos.
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
