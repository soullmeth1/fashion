import React from "react";
import "./TodayBest.scss";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import Button from "./Button";
import Card from "./Card";
import bs from "../images/bs.jpg";
import bs1 from "../images/bs1.jpg";
import bs2 from "../images/bs2.jpg";

function TodayBest() {
  return (
    <section>
      <div className="best">
        <div className="best__head">
          <h1>Today Best Seller</h1>
          <span>
            <TrendingFlatIcon />
          </span>
        </div>
        <div className="best__body">
          <Card name="Comfortable shirt" price="$74.99" src={bs} />
          <Card name="Comfortable shirt" price="$74.99" src={bs1} />
          <Card name="Comfortable shirt" price="$74.99" src={bs2} />
        </div>
        <Button name="View all" />
      </div>
    </section>
  );
}

export default TodayBest;
