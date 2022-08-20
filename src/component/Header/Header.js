import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../component";

// style
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur Lorem ipsum
          dolor Lorem ipsum dolor
        </p>
        <button className="custom_button" type="button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img app__header-img">
        <img src={images.welcome} />
      </div>
    </div>
  );
};
export default Header;
