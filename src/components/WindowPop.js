import React, { useState } from "react";
import { FlexboxGrid } from "rsuite";
import "../css/windowpop.css";
import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Image2Thumb from "../images/image-product-2-thumbnail.jpg";
import Image3Thumb from "../images/image-product-3-thumbnail.jpg";
import Image4Thumb from "../images/image-product-4-thumbnail.jpg";
import Previous from "../images/icon-previous.svg";
import Next from "../images/icon-next.svg";
import Close from "../images/icon-close.svg";

function WindowPop({ close }) {
  const [activeInWindow, setActive] = useState(1);
  function activate(val) {
    setActive(val);
  }
  function previousDrawer() {
    if (1 < activeInWindow < 4 || activeInWindow === 4) {
      setActive(activeInWindow - 1);
    }
    if (activeInWindow === 1) {
      setActive(4);
    }
  }
  function nextDrawer() {
    if (1 < activeInWindow < 4 || activeInWindow === 1) {
      setActive(activeInWindow + 1);
    }
    if (activeInWindow === 4) {
      setActive(1);
    }
  }

  return (
    <div className="window-div">
      <img src={Close} alt="" className="close-window" onClick={close} />
      <div className="window-content">
        <span className="arrow-btn-container-window">
          <img
            src={Previous}
            alt=""
            onClick={() => {
              previousDrawer();
            }}
            className="arrow-btn-previous-window"
          />
        </span>
        <img
          src={require(`../images/image-product-${activeInWindow}.jpg`)}
          alt=""
          className="modal-img"
        />
        <span className="arrow-btn-container-window">
          <img
            src={Next}
            alt=""
            onClick={() => {
              nextDrawer();
            }}
            className="arrow-btn-next-window"
          />
        </span>

        <FlexboxGrid justify="space-between" style={{ marginTop: "5%" }}>
          <FlexboxGrid.Item colspan={4}>
            <img
              src={Image1Thumb}
              alt=""
              onClick={() => {
                activate(1);
              }}
              className={
                activeInWindow === 1
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
                activeInWindow === 2
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
                activeInWindow === 3
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
                activeInWindow === 4
                  ? "thumbnailimg thumbnailimg-active"
                  : "thumbnailimg"
              }
            />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  );
}

export default WindowPop;
