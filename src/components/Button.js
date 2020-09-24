import React from "react";
import "./Button.scss";

function Button({ name }) {
  return <button className="button">{name}</button>;
}

export default Button;
