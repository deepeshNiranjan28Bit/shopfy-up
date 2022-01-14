import React from "react";
import { FlexboxGrid, Col } from "rsuite";
import "../css/items.css";
import CartImg from "../images/icon-cart2.svg";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Image2Thumb from "../images/image-product-2-thumbnail.jpg";
import Image3Thumb from "../images/image-product-3-thumbnail.jpg";
import Image4Thumb from "../images/image-product-4-thumbnail.jpg";
import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";

function Items() {
  return (
    <div className="items-div">
      <FlexboxGrid align="middle" justify="space-around">
        <FlexboxGrid.Item as={Col} colspan={24} md={12} lg={9}>
          <div style={{ textAlign: "center", maxWidth: "max-content" }}>
            <img src={Image1} alt="" className="modal-img" />
            <FlexboxGrid justify="space-between" style={{ marginTop: "5%" }}>
              <FlexboxGrid.Item colspan={4}>
                <img src={Image1Thumb} alt="" className="thumbnailimg" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                <img src={Image2Thumb} alt="" className="thumbnailimg" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                <img src={Image3Thumb} alt="" className="thumbnailimg" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                <img src={Image4Thumb} alt="" className="thumbnailimg" />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={12} lg={10}>
          <div>
            <strong style={{ color: "#f58840" }}>SNEAKER COMPANY</strong>
            <h2>Fall Limited Edition Sneakers</h2>
            <br />
            These low profile sneakers are your perfect casual wear
            companion.Featuring a durable rubber outer sole, they'll withstand
            everything the weather can offer.
            <br />
            <br />
            <h4 style={{ display: "inline" }}>
              $125 <span className="discount-div">50%</span>
            </h4>
            <p style={{ textDecoration: "line-through", color: "#D3D3D3" }}>
              $250
            </p>
            <br />
            <button className="counter-btn">
              <span>
                <img src={Minus} alt="Minus" />
              </span>
              &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp;
              <span>
                <img src={Plus} alt="plus" />
              </span>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="addtocart-btn">
              <img src={CartImg} alt="cart" /> &nbsp; Add To Cart
            </button>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default Items;
