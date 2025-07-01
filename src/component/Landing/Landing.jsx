import React from "react";
import Products from "./Products/Products";

export default function Landing({ products }) {
  return (
    <div>
      <Products products={products} />
    </div>
  );
}
