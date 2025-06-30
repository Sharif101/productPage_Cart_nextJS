import React from "react";
import Products from "./Products/Products";

export default function Landing({ products }) {
  return (
    <div>
      <p className="text-[50px]">landing</p>
      <Products products={products} />
    </div>
  );
}
