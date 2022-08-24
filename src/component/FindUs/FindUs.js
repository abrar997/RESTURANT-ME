import React from "react";
import "./FindUs.css";
import { SubHeading } from "../../component";
import { images } from "../../constants";
const FindUs = () => {
  return (
    <div className=" app__wrapper app__bg section__padding " id="contact">
      <div className="app_findus-content app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className='headtext_cormorant' style={{marginBottom:"3rem",marginRight:"auto"}}>Find us</h1>
      <div className="app__wrapper-content  ">
        <p className=" p__opensans"> Satrt now hrer  Lorem lorem ipsum dolor sit amet </p>
        <p className=" p__cormorant" style={{color:"#DCCA87",margin:"2rem 0 "}}> Open hours</p>
        <p className=" p__opensans">Mon-fri : 10:00Am - 10:00Pm</p>
        <p className=" p__opensans"> sat-sun : 10:00 Am - 12:00 pm </p>
             <button className=" custom_button" style={{ marginTop: '2rem' }}>Know More</button>
        </div>      
      </div>

      <div className="app__wrapper_img app__findus-img">
        <img src={images.findus} alt="find us "  />
      </div>
    </div>
  );
};

export default FindUs;
