import React, { useReducer  } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {ADD_TO_CART, REMOVE_ITEM, EMPTY_BASKET } from "../Types";

const CartState = ({ children }) => {
  
  const initalState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

    const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  
  const emptyItem = (id) => {
    dispatch({
      type: EMPTY_BASKET,
      id: id,
    });
  };
  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        emptyItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
