export const handleAddToCart = ({
  productDetails,
  selectedVariant = null,
  quantity = 1,
  stateCart,
  dispatchCart,
}) => {
  const product = productDetails?.data;

  const item = {
    id: selectedVariant?.id || product.id,
    name: productDetails?.data?.name || product.title,
    image: selectedVariant?.image || product.image,
    price: parseFloat(
      product.discount_price || selectedVariant?.discount_price || product.price
    ),
    quantity: Math.max(quantity, 1),
    variant: selectedVariant?.variation_attributes || [],
  };

  // Check if item with same variant already exists
  const existingIndex = stateCart.info.findIndex((cartItem) => {
    const sameId = cartItem.id === item.id;
    const sameVariant =
      JSON.stringify(cartItem.variant || []) ===
      JSON.stringify(item.variant || []);
    return sameId && sameVariant;
  });

  let updatedCart;

  if (existingIndex > -1) {
    // Update quantity if already exists
    updatedCart = [...stateCart.info];
    updatedCart[existingIndex].quantity += item.quantity;
  } else {
    // Add new item
    updatedCart = [...stateCart.info, item];
  }

  // Dispatch updated cart to reducer
  dispatchCart({ type: "set", payload: updatedCart });
};
