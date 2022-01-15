import React from "react";
import Close from "../images/icon-close.svg";
import "../css/menupop.css";

function MenuPop({ close }) {
  return (
    <div className="menupop-div">
      <div className="menupop-content">
        <img src={Close} alt="" onClick={close} className="menupop-close" />
        <div href="#collections" className="res-menu-pop">
          Collections
        </div>
        <div href="#men" className="res-menu-pop">
          Men
        </div>
        <div href="#women" className="res-menu-pop">
          Women
        </div>
        <div href="#about" className="res-menu-pop">
          About
        </div>
        <div href="#contact" className="res-menu-pop">
          Contact
        </div>
      </div>
    </div>
  );
}

export default MenuPop;
