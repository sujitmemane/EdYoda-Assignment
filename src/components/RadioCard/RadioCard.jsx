import React from "react";
import classes from "./radiocard.module.css";

const RadioCard = ({ info, selectedOption, onChange }) => {
  return (
    <label>
      <div
        className={`${classes.cardContainer} ${
          info.disable ? classes.disable : ""
        } ${selectedOption == info.value ? classes.checkedStyles : ""} `}
      >
        {info.label && (
          <span
            className={classes.label}
            style={{ background: info.labelColor }}
          >
            {info.label}
          </span>
        )}
        <input
          type="radio"
          className={classes.inputBox}
          name="options"
          value={info.value}
          checked={info.value == selectedOption}
          onChange={(e) => onChange(e.target.value)}
          disabled={info.disable}
        />
        <h3 className={classes.title}>{info.title}</h3>
        <div>
          <p>Total ₹{info.total}</p>
          <p>₹{info.monthly} /mo</p>
        </div>
      </div>
    </label>
  );
};

export default RadioCard;
