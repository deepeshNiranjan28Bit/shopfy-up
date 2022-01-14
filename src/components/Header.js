import React from "react";
import "../css/header.css";
import Logo from "../images/logo.svg";
import CartImg from "../images/icon-cart.svg";
import AvatarImg from "../images/image-avatar.png";
import { Navbar, Nav } from "rsuite";

function Header() {
  return (
    <div className="header-div">
      <Navbar appearance="subtle">
        <Navbar.Brand>
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Item>Collections</Nav.Item>
          <Nav.Item>Men</Nav.Item>
          <Nav.Item>Women</Nav.Item>
          <Nav.Item>About</Nav.Item>
          <Nav.Item>Contact</Nav.Item>
        </Nav>

        <Nav pullRight>
          <Nav.Item>
            <img src={CartImg} alt="cart" />
          </Nav.Item>
          <Nav.Item>
            <img src={AvatarImg} alt="avatar" height="40px" width="40px" />
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
