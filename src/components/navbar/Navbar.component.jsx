import "./navbar.style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar" >
        <div className="navbar-logo">
            <img src="http://127.0.0.1:5500/assets/img/logo.svg" alt="" />
        </div>
        <div className="navbar-info-section-mid">
                <div>
                    <Link to="#" >Home</Link>
                </div>
                <div>
                    <Link to="#" >About us</Link>
                </div>
                <div>
                    <Link to="#" >Portfolio</Link>
                </div>
                <div>
                    <Link to="#" >Services</Link>
                </div>
                <div>
                    <Link to="#">Gallery</Link>
                </div>
                <div>
                    <Link to="#">Contact Us</Link>
                </div>
        </div>
    
        <div className="navbar-info-section">
                <a className="button button-small button-blue" href="https://api.whatsapp.com/send?phone=+923338070666&text=Mac%20Productions%20and%20Graphics%20" target="_blank" >
                <p className="text" >Let's Talk</p>              
            </a>  
        </div>
    </div>
  )
}

export default Navbar;