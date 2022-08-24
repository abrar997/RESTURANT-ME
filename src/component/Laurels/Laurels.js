import React from "react";

import "./Laurels.css";
import { SubHeading } from "../../component";
import { images, data } from "../../constants";

const Laurels = () => {
  const AwardCard = ({ award: { title, imgUrl, subtitle } }) => {
    return (
      <div className="app__laurels_awards-cards">
        <img src={imgUrl} alt="award" />
        <div className="app__laurels_awards-content">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
          <p className="p__cormorant">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  return (
    <div className="app__laurels app__bg app__wrapper section__padding " id='awards'>
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognation" />
        <h1 className="headtext_cormorant" style={{ marginRight: "auto" }}>
          Our Laurels{" "}
        </h1>
        <div className="app__laurles_awards">
          {data.awards.map((item) => {
            return <AwardCard award={item} key={item.title} />;
          })}
        </div>
      </div>

      {/* image here  */}
      <div className="app__wrapper_img ">
        <img src={images.laurels} />
      </div>
    </div>
  );
};

export default Laurels;
