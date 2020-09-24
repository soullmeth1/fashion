import React from "react";
import "./Gallery.scss";
import Image from "./Image";
import ph from "../images/ph.jpg";

function Gallery() {
  return (
    <section>
      <div className="gallery">
        <div className="gallery__title">
          <h1>Our Gallery</h1>
        </div>
        <div className="gallery__body">
          <Image src={ph} name="hoodie" />
          <Image src={ph} name="hoodie" />
          <Image src={ph} name="hoodie" />
          <Image src={ph} name="hoodie" />
          <Image src={ph} name="hoodie" />
          <Image src={ph} name="hoodie" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
