import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";
// import cartContext from "../../store/cart-context";
import CartContext from "../../store/cart-context";
const HeaderCartBtn = (props) => {
  const [btnHighLight, setBtnHighLight] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartitems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighLight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighLight(true);

    const timer = setTimeout(() => {
      setBtnHighLight(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClickHeader}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  );
};

export default HeaderCartBtn;
