"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { Cart } from "@/contexts/context";

export default function ProductCart() {
  const { stateCart, dispatchCart } = useContext(Cart);
  const cartProducts = stateCart.info;

  const subTotal = (cartProducts ?? []).reduce((sum, item) => {
    const qty = item.quantity || 1;
    return sum + item.discount_price * qty;
  }, 0);

  const handleCart = (action, id) => {
    const updatedCart = cartProducts.map((item) => {
      if (item.id === id) {
        const qty = item.quantity ?? 1;
        const newQty =
          action === "increase"
            ? qty + 1
            : action === "decrease"
            ? Math.max(1, qty - 1)
            : qty;

        return { ...item, quantity: newQty };
      }
      return item;
    });

    dispatchCart({ type: "set", payload: updatedCart });
  };

  const handleDeleteItem = (sku) => {
    const updatedCart = cartProducts.filter((item) => item.sku !== sku);
    dispatchCart({ type: "set", payload: updatedCart });
  };

  return (
    <div className="px-20 py-8 bg-gray-50 min-h-screen">
      <div className="text-sm text-gray-500 mb-4">Home &gt; My Cart</div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="bg-white flex justify-between items-center p-4 rounded">
            <h1 className="text-2xl font-bold text-[#0F172A]">
              My Cart ({cartProducts.length})
            </h1>
            <p className="text-[#475569] text-[14px] cursor-pointer">
              Clear All
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            {cartProducts?.map((item, i) => (
              <div key={i} className="flex items-start gap-4 mb-10">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded object-cover w-[80px] h-[80px]"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-sm text-[#0F172A]">
                      {item.name}
                    </h2>
                    <div className="text-right">
                      <span className="text-[#0F172A] font-bold text-lg mr-3">
                        ৳{item.discount_price * (item.quantity || 1)}
                      </span>
                      <span className="line-through text-[#475569] text-sm">
                        ৳{item.regular_price}
                      </span>
                    </div>
                  </div>

                  {item.is_variant &&
                    item.variation_attributes?.map((attr, i) => (
                      <div key={i} className="mt-1">
                        <div className="text-sm text-[#0F172A] flex gap-2">
                          <span>{attr.attribute?.name}</span>
                          <span>:</span>
                          <span>{attr.attribute_option?.attribute_value}</span>
                        </div>
                      </div>
                    ))}

                  <div className="mb-6 mt-3 flex items-center gap-5">
                    <div className="flex items-center justify-between border border-gray-200 rounded-full w-fit px-1 py-1">
                      <button
                        onClick={() => handleCart("decrease", item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                      >
                        -
                      </button>
                      <div className="w-10 text-center text-black text-[14px]">
                        {item.quantity || 1}
                      </div>
                      <button
                        onClick={() => handleCart("increase", item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-xl flex items-center justify-center transition cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span>
                      <RiDeleteBinLine
                        className="text-[17px] text-[#94A3B8] cursor-pointer"
                        onClick={() => handleDeleteItem(item.sku)}
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[380px] h-fit bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Order summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <p className="text-[#475569]">
              Price ({cartProducts.length} items)
            </p>
            <p>৳{subTotal}</p>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <p className="text-[#475569]">Shipping fee</p>
            <p className="text-blue-500 text-xs cursor-pointer">To be added</p>
          </div>

          <div className="mt-5 relative">
            <input
              type="text"
              placeholder="Store / Falcon coupon"
              className="w-full border border-gray-300 rounded px-3 py-2 text-[12px] text-[#475569] focus:outline-none"
            />
            <button className="w-fit bg-green-600 text-white p-2 rounded absolute bottom-0 right-0 text-[13px] cursor-pointer">
              Apply
            </button>
          </div>

          <div className="flex justify-between mt-4 font-bold">
            <p className="text-[#334155]">Sub Total</p>
            <p>৳{subTotal}</p>
          </div>

          <button className="w-full bg-emerald-600 text-white py-2 mt-4 rounded hover:bg-emerald-700">
            Proceed to Checkout
          </button>

          <div className="flex items-start mt-4 gap-2 text-xs text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I have read and agree to the Terms and Conditions, Privacy Policy
              and Refund and Return Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
