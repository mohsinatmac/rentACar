import "./navbar.style.css";
import Logo from "../../assets/Navbar/logo.png";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar section-container" >
        <img src={Logo} alt="swiper logo"/>
        <ul class="menu" >
            <li>
                <a href="#">Home</a>   
            </li>
            <li>
                <a href="#">Cars</a>   
            </li>
            <li>
                <a href="#">Booking</a>   
            </li>
            <li>
                <a href="#">Contact Us</a>   
            </li>
        </ul>
        <a class="primary-button nav-button "  href="#">Sign in</a>
    </nav>
  )
}

export default Navbar;