import React from "react";
import CartProvider from "./cart";

export default function ContextProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
