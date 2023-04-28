import React, { useRef, useState } from "react";
import classes from "./MealsItemForm.module.css";
import Input from "../UI/Input";
const MealsItemForm = (props) => {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  // if not default value in input

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enrteredAmount = amountInputRef.current.value;
    // conver type => number for input
    const enrteredAmountNumber = Number(amountInputRef.current.value);

    // if (
    //   enrteredAmount.trim().length === 0 ||
    //   enrteredAmountNumber < 1 ||
    //   enrteredAmountNumber > 5
    // ) {
    //   // setAmountIsValid(false);
    //   // return;
    // } else {
    props.onAddToCart(enrteredAmountNumber);
    // }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {/* {!amountIsValid && <p>Please check a valid amount (1-5) (-_-) </p>} */}
    </form>
  );
};
export default MealsItemForm;
