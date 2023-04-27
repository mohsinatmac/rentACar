import "./TopBar.style.css";
import mailIcon from "../../assets/others/mail.svg";
import phoneIcon from "../../assets/others/phone.svg";
import timeIcon from "../../assets/others/time.svg";
import facebookIcon from "../../assets/Social/facebook.svg";
import instagramIcon from "../../assets/Social/instagram.svg";
import twitterIcon from "../../assets/Social/twitter.svg";


const Topbar = () => {
  return (
    <div className="topbar-wrapper" >
        <div className="topbar section-container">
            <div className="topbar-left">
                <div className="topbar-left-element" >
                    <img src={phoneIcon} alt="phone icon" />
                    <p>+208 333 9296</p>
                </div>
                <div className="topbar-left-element" >
                    <img src={mailIcon} alt="phone icon" />
                    <p>contact@rentaly.com</p>
                </div>
                <div className="topbar-left-element" >
                    <img src={timeIcon} alt="phone icon" />
                    <p>Mon - Fri 08.00 - 18.00</p>
                </div>
                
            </div>
            <div className="topbar-right" >
                <img src={facebookIcon} alt="facebook icon" />
                <img src={twitterIcon} alt="twitter icon" />
                <img src={instagramIcon} alt="instagram icon" />
            </div>
        </div>
    </div>
  )
}

export default Topbar;