import React from "react";
import classes from "./navbar.module.css";
import { BiSolidChevronDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarLeft}>
        <p className={classes.logo}>EDYODA</p>
        <div className={classes.menuList}>
          <div className={classes.menuItem}>
            <p>Courses</p>
            <BiSolidChevronDown />
          </div>
          <div className={classes.menuItem}>
            <p>Programs</p>
            <BiSolidChevronDown />
          </div>
        </div>
      </div>
      <div className={classes.navbarRight}>
        <GoSearch className={classes.searchLogo} size={25} />
        <p className={classes.logIn}>Log In</p>
        <p className={classes.primaryButton}>Join Now</p>
      </div>
    </div>
  );
};

export default Navbar;
