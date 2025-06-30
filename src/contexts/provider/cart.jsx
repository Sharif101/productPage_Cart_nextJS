"use client";
import React, { useReducer } from "react";
import { Cart } from "../context";
import { cartReducer, cartState } from "../reducer/cartReducer";

export default function CartProvider({ children }) {
  const [stateCart, dispatchCart] = useReducer(cartReducer, cartState);
  return (
    <Cart.Provider value={{ stateCart, dispatchCart }}>
      {children}
    </Cart.Provider>
  );
}
