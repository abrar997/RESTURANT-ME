import React from "react";
import "./NewsLetter.css";
import SubHeading from "../../SubHeading/SubHeading";

const NewsLetter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className=" headtext_cormorant">Subscribe to Our Newsletter </h1>
        <p className=" p__opensans"> And Never Miss Latest Updates ! </p>
      </div>
      <div className="app__newletter-input flex__center">
        <input type="email" name="email" placeholder="enter your email" />
        <button className=" custom_button ">subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
