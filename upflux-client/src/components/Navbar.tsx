import logo from "../assets/logos/logo-light-large.png";
import '../features/Navbar/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
         <img src={logo} alt="Logo" className="logo" />
        </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;