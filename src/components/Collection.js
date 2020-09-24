import React from "react";
import Button from "./Button";
import "./Collection.scss";
import phback from "../images/phback.jpg";

function Collection() {
  return (
    <section>
      <div className="collection">
        <div className="collection__img">
          <p>COME HAVE A LOOK</p>
          <img src={phback} alt="" />
        </div>
        <div className="collection__details">
          <h1>Explore our new collection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reiciendis obcaecati molestiae nemo doloribus tempore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Dicta, recusandae.
          </p>
          <Button name="Explore now" />
        </div>
      </div>
    </section>
  );
}

export default Collection;
