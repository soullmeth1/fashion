import React from "react";
import "./Card.scss";

function Card({ src, name, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__detail">
        <p>{name}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default Card;
