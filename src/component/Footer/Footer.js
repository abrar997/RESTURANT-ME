import React from "react";
import "./Footer.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, NewsLetter } from "../../component";
import { FaHeart } from "react-icons/fa";
import { images } from "../../constants";
const Footer = () => {
  return (
    <div id="footer " className="app__footer section__padding ">
      <FooterOverlay />
      <NewsLetter />
      <div className="app__footer-links">

        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact US</h1>
          <p className=" p__opensans ">Havalan , Erbil , Iraq </p>
          <p className=" p__opensans ">+96400000000000 </p>
          <p className=" p__opensans ">+96400000000000 </p>
        </div>
        
        <div className="app__footer-links_logo">
        <div>
        <span>Code/Mu.</span>  
         <img src={images.logo} alt="Logo " width={35} />
        </div>
          <p className=" p__opensans"><q> The best way to find yourself is to lose yourself in the <br/> service of others</q> </p>
          <img src={images.spoon} className=' spoon_img' style={{marginTop:"30px"}} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
        </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className=" p__opensans ">Monday-Friday : </p>
          <p className=" p__opensans ">08:00 am - 12:00 am </p>
          <p className=" p__opensans ">Saturday-Sunday : </p>
          <p className=" p__opensans ">08:00 am - 12:00 am </p>
        </div>

      </div>


      <div className="footer__copyright">
        <p className=" p__opensans">
          2022 Abrar Muthans <FaHeart />. All Rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
