import "./header.style.css";
import { Link } from "react-router-dom";
import arrowRightDark from "../../assets/others/arrow-right-dark.svg";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header section-container" >
        <div className="header-left">
          <p className="subtitle" >We are Rentaly</p>
          <h1>Explore the world with comfortable car</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="header-buttons">
            <Link className="primary-button" >Avaliable Cars</Link>
            <Link className="secondary-button">
              Reach Us!
              <img className="right-arrow"  src={arrowRightDark} alt="svg arrow icon" />
              <img className="header-car-background-image"  src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_image.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="header-right" >
          <img src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car-2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header;