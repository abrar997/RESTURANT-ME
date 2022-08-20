import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import {images} from "../../constants"
import "./Navbar.css";
const Navbar = () => {
const [ToggleMenu,setToggleMenu] =React.useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        CODE/MU.
        <img src={images.logo} alt="app logo"  width={50} />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">about</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register{" "}
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table{" "}
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}} className='app__navbar-smallsecreen-open' />
        {ToggleMenu ? 
        <div className="app__navbar-smallscreen_overlay flex__center  slide-bootom">
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="ovarlay__close "
            onClick={() => {setToggleMenu(false)}}
            />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#about">about</a>
            </li>
            <li className="p__opensans">
              <a href="#menu">menu</a>
            </li>
            <li className="p__opensans">
              <a href="#awards">awards</a>
            </li>
            <li className="p__opensans">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
          :""}
      </div>
    </nav>
  );
};

export default Navbar;
