import React, { useRef } from "react";
import "./Gallery.css";
import { SubHeading } from "../../component";
import { images } from "../../constants";
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsInstagram,
} from "react-icons/bs";

const Images = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {

  // when cllick on btn useRef will sign  where u decide
  const scrollRef = useRef(null);

  // make carousel
  const scroll = (direction) => {
    const { current } = scrollRef;
    // if left
    if (direction === "left") {
      current.scrollLeft -= 300;
    }
    // if right
    else if (direction === "right") {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
     
      {/* header gallery content */}
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
        <div className="app__gallery-images_container" ref={scrollRef}>
          {Images.map((item, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center "
                key={`gallery-images-${index + 1}`}
              >
                <img src={item} alt="galleery-images" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            );
          })}
        </div>

        {/* arrows btn  */}
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
