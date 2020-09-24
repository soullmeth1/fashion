import React from "react";
import "./Image.scss";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

function Image({ src, name }) {
  return (
    <div className="image">
      <img src={src} alt="" />
      <button>
        SEE ALL{" "}
        <span>
          <TrendingFlatIcon />
        </span>
      </button>
      <p>{name}</p>
    </div>
  );
}

export default Image;
