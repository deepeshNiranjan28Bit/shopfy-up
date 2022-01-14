import React from "react";
import "../css/header.css";
import Logo from "../images/logo.svg";
import CartImg from "../images/icon-cart.svg";
import AvatarImg from "../images/image-avatar.png";

function Header() {
  return (
    <div className="header-nav-div">
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-left">
        <a href="#collections" className="nav-link nav-link-grow-up">
          Collections
        </a>
        <a href="#men" className="nav-link nav-link-grow-up">
          Men
        </a>
        <a href="#women" className="nav-link nav-link-grow-up">
          Women
        </a>
        <a href="#about" className="nav-link nav-link-grow-up">
          About
        </a>
        <a href="#contact" className="nav-link nav-link-grow-up">
          Contact
        </a>
      </div>
      <div className="nav-right">
        <div style={{ marginRight: "20px" }}>
          <img
            src={AvatarImg}
            alt="avatar"
            height="40px"
            width="40px"
            className="avatar-pic"
          />
        </div>
        <div style={{ marginRight: "20px" }} className="cart-div">
          <img src={CartImg} alt="cart" />
        </div>
      </div>
    </div>
  );
}

export default Header;
