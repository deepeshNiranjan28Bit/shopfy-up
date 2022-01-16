import React from "react";
import "../css/header.css";
import { useMediaQuery, useModalState } from "../misc/custom-hooks";
import Logo from "../images/logo.svg";
import CartImg from "../images/icon-cart.svg";
import AvatarImg from "../images/image-avatar.png";
import MenuImg from "../images/icon-menu.svg";
import MenuPop from "./MenuPop";
import CartPop from "./CartPop";

function Header({ countItem, count0, isOpenCart, closeCart, openCart }) {
  const isMobile = useMediaQuery("( max-width : 700px )");
  const { isOpen, close, open } = useModalState();

  return (
    <div className={isMobile ? "header-nav-div-res" : "header-nav-desk"}>
      {isMobile ? (
        <>
          <div className="menu-res-logo">
            <img
              src={MenuImg}
              alt="menu"
              style={{ marginLeft: "20px" }}
              onClick={open}
            />
            {isOpen && <MenuPop close={() => close()} />}

            <img src={Logo} alt="logo" style={{ marginLeft: "20px" }} />
          </div>

          <div className="menu-res-cart base">
            <span className="base">
              <img
                src={CartImg}
                alt=""
                style={{ marginRight: "20px" }}
                onClick={isOpenCart ? openCart : closeCart}
              />

              {isOpenCart && (
                <>
                  <div
                    className="indicator"
                    style={{ right: isMobile && "18px" }}
                  >
                    <div className="noti_cart">{countItem}</div>
                  </div>

                  <CartPop
                    close={() => closeCart()}
                    count={countItem}
                    count0={count0}
                  />
                </>
              )}
            </span>
            <img
              src={AvatarImg}
              alt="avatar"
              height="40px"
              width="40px"
              className="avatar-pic"
              style={{ marginRight: "20px" }}
            />
          </div>
        </>
      ) : (
        <>
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
            <div style={{ marginRight: "20px" }} className="cart-div base">
              <img
                src={CartImg}
                alt=""
                onClick={isOpenCart ? closeCart : openCart}
              />

              {isOpenCart && (
                <>
                  <div className="indicator">
                    <div className="noti_cart">{countItem}</div>
                  </div>
                  <CartPop
                    close={() => closeCart()}
                    count={countItem}
                    count0={count0}
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
