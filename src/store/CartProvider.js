import React, { useReducer } from "react";
import CartContext from "./cart-context";

// useReduce : 1 hàm nhận 2 tham số
// state , action thực hiện logic
// 1 giá trị ban đầu default

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // if add đúng item có index trùng item sẵn có ( IndexState = IndexAction)
    // thì chạy hàm
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    // let updadtedItem;
    let updadtedItems;

    if (existingCartItem) {
      const updadtedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updadtedItems = [...state.items];
      updadtedItems[existingCartItemIndex] = updadtedItem;
    } else {
      // updadtedItem = { ...action.item };
      updadtedItems = state.items.concat(action.item);
    }

    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updadtedItems,
      totalAmount: updatedtotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedtotalAmount = state.totalAmount - existingItem.price;
    let updadtedItems;
    if (existingItem.amount === 1) {
      updadtedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updadtedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updadtedItems = [...state.items];
      updadtedItems[existingCartItemIndex] = updadtedItem;
    }
    return {
      items: updadtedItems,
      totalAmount: updatedtotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchcartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandle = (item) => {
    dispatchcartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemCartHandle = (id) => {
    dispatchcartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandle,
    removeItem: removeItemCartHandle,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
