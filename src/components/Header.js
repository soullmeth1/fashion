import React from "react";
import "./Header.scss";
import foto from "../images/fotoHeader.webp";
import Button from "./Button";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__caption">
          <h1>Fashion Trend</h1>
          <h2>ON 2020.</h2>
          <p>
            Let's get fashionated with us. We will perform you to be better in
            your life.
          </p>
          <Button name="More details" />
        </div>
        <div className="header__img">
          <img src={foto} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed labore
            nemo doloremque veniam aut pariatur! Alias labore aliquam
            consequuntur temporibus.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
