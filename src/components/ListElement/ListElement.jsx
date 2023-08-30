import React from "react";
import classes from "./listelement.module.css";

const ListElement = ({ content }) => {
  return (
    <div className={classes.listItemContainer}>
      <img src={content.icon} className={classes.logoImage} />
      <h3>{content.title}</h3>
    </div>
  );
};

export default ListElement;
