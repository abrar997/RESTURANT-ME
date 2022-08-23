import React from "react";
import { images } from "../../constants";
import "./About.css";

const About = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G letter" />
      </div>
      <div className="flex__center app__aboutus-content">
        <div className="app__aboutus-content_about">
          <h1 className="headtext_cormorant">About US </h1>
          <img src={images.spoon} alt="spoon" className="spoon_img" />
          <p className="p__opensans">
            Lorem ipsum is placeholder text commonly used in the graphic,
            <br /> print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
          <button className="custom_button custom_button-about">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife">
          <img src={images.knife} alt="about knief" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext_cormorant" >Our History </h1>
          <img src={images.spoon} alt="spoon  " className="spoon_img" />
          <p className="p__opensans">
            Lorem ipsum is placeholder text commonly used in the graphic,
            <br /> print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
          <button className="custom_button" type="button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
