import React, { useState } from "react";
import classes from "./paymentcontainer.module.css";
import RadioCard from "../RadioCard/RadioCard";
import Razorpay from "../../assets/razorpay.png";
import { plans } from "../content";

const PaymentContainer = () => {
  const [selectedOption, setSelectedOption] = useState(6999);
  function radioChangeHandler(value) {
    setSelectedOption(value);
  }
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
          <RadioCard
            key={info.id}
            selectedOption={selectedOption}
            info={info}
            onChange={radioChangeHandler}
          />
        ))}
      </div>
      <hr style={{ marginTop: "20px" }} />
      <div className={classes.subs}>
        <p>Subscription Fee</p>
        <p> ₹ {selectedOption}</p>
      </div>
      <div className={classes.redCardMain}>
        <div className={classes.redCardContainer}>
          <p>Limited time offer</p>
          <p> - ₹500</p>
        </div>
        <div>
          <p>Offer Valid till 25th March 2023</p>
        </div>
      </div>
      <div className={classes.totalContainer}>
        <p>Total (Incl. of 18% GST )</p>
        <p> ₹ {selectedOption - 500}</p>
      </div>
      <div className={classes.actionContainer}>
        <button
          className={`${classes.cancelBtn} ${classes.button} `}
          onClick={() => setSelectedOption(6999)}
        >
          CANCEL
        </button>
        <button className={`${classes.paymentBtn} ${classes.button} `}>
          PROCEED TO PAY
        </button>
      </div>
      <img src={Razorpay} className={classes.razorpayImg} />
    </div>
  );
};

export default PaymentContainer;
