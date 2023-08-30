import React from "react";
import classes from "./paymentcontainer.module.css";
import RadioCard from "../RadioCard/RadioCard";
import { plans } from "../content";

const PaymentContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.openingContainer}>
        <div className={classes.openingItem}>
          <span className={classes.roundedCircle}>1</span>
          <p>Sign Up</p>
        </div>
        <div className={classes.openingItem}>
          <span className={classes.roundedCircle}>2</span>
          <p>Subscribe</p>
        </div>
      </div>
      <p className={classes.headingText}>Select your subcription plan</p>
      <div className={classes.cardContainer}>
        {plans.map((info) => (
          <RadioCard info={info} />
        ))}
      </div>
    </div>
  );
};

export default PaymentContainer;
