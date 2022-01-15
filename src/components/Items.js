import React, { useState } from "react";
import { FlexboxGrid, Col } from "rsuite";
import "../css/items.css";
import { useMediaQuery, useModalState } from "../misc/custom-hooks";
import CartImg from "../images/icon-cart2.svg";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import Previous from "../images/icon-previous.svg";
import Next from "../images/icon-next.svg";
import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Image2Thumb from "../images/image-product-2-thumbnail.jpg";
import Image3Thumb from "../images/image-product-3-thumbnail.jpg";
import Image4Thumb from "../images/image-product-4-thumbnail.jpg";
import WindowPop from "./WindowPop";

function Items() {
  const isMobile = useMediaQuery("( max-width : 700px )");
  const { isOpen, close, open } = useModalState();
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const [active, setActive] = useState(1);
  function activate(val) {
    setActive(val);
  }
  function previousDrawer() {
    if (1 < active < 4 || active === 4) {
      setActive(active - 1);
    }
    if (active === 1) {
      setActive(4);
    }
  }
  function nextDrawer() {
    if (1 < active < 4 || active === 1) {
      setActive(active + 1);
    }
    if (active === 4) {
      setActive(1);
    }
  }

  return (
    <div className={isMobile ? "items-div-res" : "items-div"}>
      <FlexboxGrid align="middle" justify="space-around">
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          sm={11}
          lg={9}
          style={{ paddingLeft: "0" }}
        >
          <div style={{ textAlign: "center", maxWidth: "max-content" }}>
            {isMobile ? (
              <div className="arrow-btn-container">
                <span className="arrow-btn-previous">
                  <img
                    src={Previous}
                    alt=""
                    style={{ alignItems: "center", margin: "auto" }}
                    onClick={() => {
                      previousDrawer();
                    }}
                  />
                </span>
                <img
                  src={require(`../images/image-product-${active}.jpg`)}
                  alt=""
                  className="modal-img-res"
                />
                <span className="arrow-btn-next">
                  <img
                    src={Next}
                    alt=""
                    style={{ alignItems: "center", margin: "auto" }}
                    onClick={() => {
                      nextDrawer();
                    }}
                  />
                </span>
              </div>
            ) : (
              <>
                <img
                  src={require(`../images/image-product-${active}.jpg`)}
                  alt=""
                  className="modal-img"
                  onClick={open}
                />
                {isOpen && <WindowPop close={() => close()} />}
              </>
            )}

            {!isMobile && (
              <FlexboxGrid justify="space-between" style={{ marginTop: "5%" }}>
                <FlexboxGrid.Item colspan={4}>
                  <img
                    src={Image1Thumb}
                    alt=""
                    onClick={() => {
                      activate(1);
                    }}
                    className={
                      active === 1
                        ? "thumbnailimg thumbnailimg-active"
                        : "thumbnailimg"
                    }
                  />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={4}>
                  <img
                    src={Image2Thumb}
                    alt=""
                    onClick={() => {
                      activate(2);
                    }}
                    className={
                      active === 2
                        ? "thumbnailimg thumbnailimg-active"
                        : "thumbnailimg"
                    }
                  />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={4}>
                  <img
                    src={Image3Thumb}
                    alt=""
                    onClick={() => {
                      activate(3);
                    }}
                    className={
                      active === 3
                        ? "thumbnailimg thumbnailimg-active"
                        : "thumbnailimg"
                    }
                  />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={4}>
                  <img
                    src={Image4Thumb}
                    alt=""
                    onClick={() => {
                      activate(4);
                    }}
                    className={
                      active === 4
                        ? "thumbnailimg thumbnailimg-active"
                        : "thumbnailimg"
                    }
                  />
                </FlexboxGrid.Item>
              </FlexboxGrid>
            )}
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} sm={11} lg={10}>
          <div className={isMobile ? "content-div-res" : ""}>
            <strong style={{ color: "#f58840" }}>SNEAKER COMPANY</strong>
            <h2 style={{ color: "#000" }}>Fall Limited Edition Sneakers</h2>
            <br />
            <h6 style={{ fontWeight: !isMobile && "300" }}>
              These low profile sneakers are your perfect casual wear
              companion.Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </h6>
            <br />
            <br />
            <h3 style={{ display: "inline", color: "#000" }}>
              $125 <span className="discount-div">50%</span>
            </h3>
            <h6
              style={{ textDecoration: "line-through", color: "#D3D3D3" }}
              className={isMobile ? "line-through-price-res" : ""}
            >
              $250
            </h6>
            <br />
            <button
              className={
                isMobile ? "res-button counter-btn-res" : "counter-btn"
              }
            >
              <span>
                <img src={Minus} alt="Minus" onClick={() => decrement()} />
              </span>
              {isMobile ? (
                <span>{count}</span>
              ) : (
                <span>&nbsp;&nbsp;&nbsp; {count} &nbsp;&nbsp;&nbsp;</span>
              )}
              <span>
                <img
                  src={Plus}
                  alt="plus"
                  onClick={() => {
                    increment();
                  }}
                />
              </span>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              className={
                isMobile ? "res-button addtocart-btn" : "addtocart-btn"
              }
            >
              <img src={CartImg} alt="cart" /> &nbsp; Add To Cart
            </button>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default Items;
