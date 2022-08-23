import React, { useRef } from "react";
import "./Gallery.css";
import { SubHeading } from "../../component";
import { images } from "../../constants";
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsInstagram,
} from "react-icons/bs";
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else if (direction === "right") {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center ">
      {/* content */}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext_cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adip Lorem
        </p>
        <button className="custom_button">View More</button>
      </div>

      {/* image */}
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}></div>
        <div className="app__gallery-images_container_arrows">
          <BsArrowLeftShort
            className="gallery_arrow-icons"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery_arrow-icons"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
