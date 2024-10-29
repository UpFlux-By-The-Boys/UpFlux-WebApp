//Image from https://img.freepik.com/premium-photo/warehouse-technician-using-computer-update-stock-records-manage-inventory_1291600-36060.jpg
import heroImage from '../../assets/images/hero-image.png'; 
import './header.css';

export const Header = () => {
  return (
    <div className="hero-image">
      <img src={heroImage} alt="Hero" className="hero-img" />
      <div className="overlay">
        <div className="text-container">
          <h1>Welcome to UpFlux!</h1>
          <p>The leading update management tool in paper mills</p>
          <a href="#about" className="learn-more-btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
