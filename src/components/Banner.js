import React from "react";
import "./Banner.scss";
import Button from "./Button";

function Banner() {
  return (
    <section>
      <div className="banner">
        <div className="banner__content">
          <p>LET'S JOIN US</p>
          <h1>UP TO 45% OFF ALL ITEM SALE</h1>
          <Button name="Get Started" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
