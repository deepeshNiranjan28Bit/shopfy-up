import React from "react";
import { FlexboxGrid, Tag } from "rsuite";
import "../css/items.css";
import CartImg from "../images/icon-cart.svg";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Image2Thumb from "../images/image-product-2-thumbnail.jpg";
import Image3Thumb from "../images/image-product-3-thumbnail.jpg";
import Image4Thumb from "../images/image-product-4-thumbnail.jpg";
import Image1 from "../images/image-product-1.jpg";

function Items() {
  return (
    <div>
      <FlexboxGrid align="middle" justify="space-around">
        <FlexboxGrid.Item colspan={10}>
          <div style={{ textAlign: "center" }}>
            <img src={Image1} alt="" className="modal-img" />
            <FlexboxGrid justify="space-around">
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
        <FlexboxGrid.Item colspan={10}>
          <div>
            SNEAKER COMPANY
            <h2>Fall Limited Edition Sneakers</h2>
            <br />
            These low profile sneakers are your perfect casual wear
            companion.Featuring a durable rubber outer sole, they'll withstand
            everything the weather can offer.
            <br />
            <h4 style={{ display: "inline-block" }}>
              $125{" "}
              <Tag style={{ backgroundColor: "#F58840" }} size="md">
                50%
              </Tag>
            </h4>
            <h6 style={{ textDecoration: "line-through" }}>$250</h6>
            <br />
            <button className="counter-btn">
              <span>
                <img src={Plus} alt="plus" />
              </span>
              &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp;
              <span>
                <img src={Minus} alt="Minus" />
              </span>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="addtocart-btn">
              <img src={CartImg} alt="cart" style={{ color: "white" }} /> &nbsp;
              Add To Cart
            </button>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default Items;
