import { toast } from "react-toastify";

const toastSuccess = () => {
  toast.dismiss();
  toast.success("Product Add to Cart", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const toastError = (message = "Product already in cart") => {
  toast.dismiss();
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const handleAddToCart = ({
  productDetails,
  selectedVariant = null,
  quantity,
  stateCart,
  dispatchCart,
}) => {
  const product = productDetails?.data;
  const isVariant = !!selectedVariant;
  const qty = Math.max(quantity, 1);

  const item = isVariant
    ? {
        ...selectedVariant,
        name: product.name,
        quantity: qty,
        is_variant: true,
        regular_price: parseInt(selectedVariant.regular_price),
        discount_price: parseInt(selectedVariant.discount_price),
        id_delivery_fee: parseInt(selectedVariant.id_delivery_fee),
      }
    : {
        id: product.id,
        name: product.name,
        image: product.thumbnail,
        quantity: qty,
        is_variant: false,
        sku: product?.sku,
        total_stock_qty: product.total_stock_qty,
        regular_price: parseInt(product.product_detail.regular_price),
        discount_price: parseInt(product.product_detail.discount_price),
      };

  const alreadyExists = stateCart.info.some(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.is_variant === item.is_variant &&
      JSON.stringify(cartItem) === JSON.stringify(item)
  );

  if (alreadyExists) {
    toastError();
    return;
  }

  dispatchCart({ type: "set", payload: [...stateCart.info, item] });
  toastSuccess();
};
