import React from "react";
import ProductCard from "@/component/Resources/ProductCard/ProductCard";

export default function Products({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:px-12">
      {products?.data?.map((product) => {
        const discountPercentage = Math.round(
          ((parseFloat(product.regular_price) -
            parseFloat(product.discount_price)) /
            parseFloat(product.regular_price)) *
            100
        );

        return (
          <ProductCard
            key={product.id}
            product={product}
            discountPercentage={discountPercentage}
          />
        );
      })}
    </div>
  );
}
