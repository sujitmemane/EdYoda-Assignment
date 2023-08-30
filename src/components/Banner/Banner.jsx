import React from "react";
import classes from "./banner.module.css";
import ListElement from "../ListElement/ListElement";
import PaymentContainer from "../PaymentContainer/PaymentContainer";
import { info } from "../content";

const Banner = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.bannerLeft}>
          <h1 className={classes.headingText}>
            Access curated courses worth ₹ 18,500 at just ₹ 99 per year!
          </h1>
          {info.map((content) => (
            <ListElement content={content} />
          ))}
        </div>
        <div className={classes.bannerRight}>
          <PaymentContainer />
        </div>
      </div>
    </div>
  );
};

export default Banner;
