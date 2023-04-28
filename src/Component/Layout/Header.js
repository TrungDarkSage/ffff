import React from "react";
import mealImage from "../../assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* <button> */}
        <HeaderCartBtn onClickHeader={props.onShowCartApp} />
        {/* </button> */}
      </header>
      <div className={classes["main - image"]}>
        <img src={mealImage} alt="full of food" width="100%" />
      </div>
    </>
  );
};

export default Header;
