import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../component";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title ">
        <SubHeading title="Menu thit fits you palatte" />
        <h1 className="headtext_cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_juice flex__center ">
          <p className="app__specialMenu-menu_heading">Fresh Juice </p>
          <div className="app__specialMenu-menu_items">
            {data.juice.map((item, index) => {
              return (
                <MenuItem key={index} title={item.title} price={item.price} tag={item.tag} />
              );
            })}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} />
        </div>
        <div className="app__specialMenu-menu_juice flex__center ">
          <p className="app__specialMenu-menu_heading">Fresh Juice </p>
          <div className="app__specialMenu-menu_items">
            {data.hotDrink.map((item,index) => {
              return (
                <MenuItem key={index} title={item.title} price={item.price}  tag={item.tag}/>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button className="custom_button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
