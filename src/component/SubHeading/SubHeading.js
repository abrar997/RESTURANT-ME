import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem", marginRight: "auto" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} className="spoon_img" />
    </div>
  );
};

export default SubHeading;
