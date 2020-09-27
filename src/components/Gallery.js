import React from "react";
import "./Gallery.scss";
import Image from "./Image";
import ph from "../images/ph.webp";
import ph1 from "../images/ph1.webp";
import ph2 from "../images/ph2.webp";
import ph3 from "../images/ph3.webp";
import ph4 from "../images/ph4.webp";
import ph5 from "../images/ph5.webp";

function Gallery() {
  return (
    <section>
      <div className="gallery">
        <div className="gallery__title">
          <h1>Our Gallery</h1>
        </div>
        <div className="gallery__body">
          <Image src={ph} name="Cassual" />
          <Image src={ph1} name="Outskirt" />
          <Image src={ph2} name="Stylist" />
          <Image src={ph3} name="Geeks" />
          <Image src={ph4} name="Nature" />
          <Image src={ph5} name="Fresh" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
