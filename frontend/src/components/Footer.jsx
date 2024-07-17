import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_top_comp">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer_top_comp">
          <h3>Custometr Support</h3>
          <ul>
            <li>FAQ'S</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>
        <div className="footer_top_comp">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <PlaceIcon /> <span>bangloore</span>
            </li>
            <li>
              <PermPhoneMsgIcon /> <span>+91 2345678901</span>
            </li>
            <li>
              <EmailIcon />
              <span>hello@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div>
          <span>
            <LinkedInIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <FacebookIcon />
          </span>
        </div>
        <hr />
        <div className="copy_right">
          <span>&copy;</span> 2024 | FUN IN SCIENCE Education Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
