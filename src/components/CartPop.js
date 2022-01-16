import React from "react";
import "../css/cartpop.css";
import Image1 from "../images/image-product-1.jpg";
import Delete from "../images/icon-delete.svg";
import { Grid, Row, Col } from "rsuite";
import { useMediaQuery } from "../misc/custom-hooks";

function CartPop({ close }) {
  const isMobile = useMediaQuery("( max-width : 700px )");
  const countPrice = 125 * 3;

  return (
    <div className={isMobile ? "cart-pop-div-res" : "cart-pop-div-desk"}>
      <div className="cart-pop-content">
        <h5
          className="cart-div-title"
          style={{
            fontSize: isMobile && "x-large",
            padding: isMobile && "10px ",
          }}
        >
          Cart{" "}
        </h5>

        <Grid fluid>
          <Row className="show-grid cart-row">
            <Col xs={5}>
              {" "}
              <img
                src={Image1}
                alt=""
                width={isMobile ? "80px" : "50px"}
                height={isMobile ? "80px" : "50px"}
              />
            </Col>
            <Col
              xs={15}
              className="cart-matter"
              style={{
                padding: isMobile ? "0 5px" : "0",
                fontSize: isMobile ? "150%" : "",
                fontWeight: isMobile ? "600" : "",
              }}
            >
              <p
                style={{
                  margin: "0",
                  marginLeft: isMobile && " 20px",
                }}
              >
                Fall Limited Editon {isMobile ? "... " : "Sneakers"}
              </p>
              <p style={{ marginTop: "0", marginLeft: isMobile && " 20px" }}>
                $125 &times; 3
                <span style={{ fontWeight: "700" }}>
                  &nbsp;&nbsp; ${countPrice}
                </span>
              </p>
            </Col>
            <Col xs={4}>
              {" "}
              <img
                src={Delete}
                alt=""
                width={isMobile ? "20px" : "13px"}
                height={isMobile ? "25px" : "15px"}
                style={{ marginTop: "20px", marginRight: isMobile && "20%" }}
              />
            </Col>
          </Row>
        </Grid>

        <button
          className={isMobile ? "checkout-btn-res" : "checkout-btn"}
          onClick={close}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPop;
