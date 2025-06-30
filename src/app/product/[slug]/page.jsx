import React from "react";
import ProductDetails from "@/component/ProductDetails/ProductDetails";
import { handleFetch } from "@/hooks/useRequest";

export default async function Page({ params }) {
  const { slug } = await params;
  const productDetails = await handleFetch(`product/${slug}`);

  return (
    <div>
      <ProductDetails productDetails={productDetails} />
    </div>
  );
}
