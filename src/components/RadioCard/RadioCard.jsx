import React from "react";
import classes from "./radiocard.module.css";

const RadioCard = ({ info }) => {
  return (
    <label>
      <div className={classes.cardContainer}>
        <input type="radio" name="options" value="option1" />
        <h1>{info.title}</h1>
        <div>
          <p>Total ₹{info.total}</p>
          <p>₹{info.monthly}/ mo</p>
        </div>
      </div>
    </label>
  );
};

export default RadioCard;
