"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdFavoriteBorder, MdStar } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

export default function ProductDetails({ productDetails }) {
  console.log(productDetails);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const images = productDetails?.data?.image || {};
  const mainImage = images[selectedImage]?.url || productDetails.data.thumbnail;

  const maxQuantity = productDetails.data.total_stock_qty;
  const increaseQty = () => {
    if (quantity < maxQuantity) {
      setQuantity((qty) => qty + 1);
    }
  };
  const decreaseQty = () => setQuantity((qty) => (qty > 1 ? qty - 1 : 1));

  const description =
    productDetails.data.description || "No description available.";

  return (
    <div className="">
      <div className="my-3 text-sm text-gray-700 max-w-8xl mx-auto px-30">
        Home &gt; Tops &gt; T-Shirts
      </div>

      <div className="flex justify-between gap-5 max-w-8xl mx-auto px-30 bg-white py-5">
        <div className="w-[500px]">
          <div className="h-[480px] flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden bg-white">
            <Image
              src={mainImage}
              alt={productDetails.data.name}
              width={480}
              height={480}
              className="object-contain max-w-full max-h-full"
              priority
            />
          </div>

          <div className="flex gap-2 mt-2 flex-wrap">
            {images.map((img, i) => (
              <div
                key={i}
                className={`w-[60px] h-[60px] rounded-md overflow-hidden relative cursor-pointer border ${
                  selectedImage === i
                    ? "border-2 border-[#00A788]"
                    : "border border-gray-300"
                }`}
                onClick={() => setSelectedImage(i)}
              >
                <Image
                  src={img.url}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        {/* middle: Details */}
        <div className="flex-1">
          <div className="w-[500px]">
            <h2 className="text-2xl mb-2 text-[#0F172A]">
              {productDetails.data.name}
            </h2>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <span>{productDetails.data.rating_avg || "0"}</span>
                <div className="flex">
                  <MdStar className="text-yellow-500 text-[20px]" />
                  <MdStar className="text-yellow-500 text-[20px]" />
                  <MdStar className="text-yellow-500 text-[20px]" />
                  <MdStar className="text-yellow-500 text-[20px]" />
                  <MdStar className="text-yellow-500 text-[20px]" />
                </div>
                <span className="ml-2 text-gray-600 font-normal">
                  {productDetails.data.rating_count || "0"}
                </span>
                <span>
                  <IoIosArrowDown className="font-bold" />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <MdFavoriteBorder className="text-[30px] text-[#64748B]" />
                </span>
                <span>
                  <IoShareSocialOutline className="text-[30px] text-[#64748B]" />
                </span>
              </div>
            </div>

            <div className="mb-3 text-2xl text-green-700 font-bold">
              ৳{productDetails.data.product_detail.discount_price}
              {productDetails.data.product_detail.regular_price >
                productDetails.data.product_detail.discount_price && (
                <span className="line-through text-gray-400 text-base ml-2">
                  ৳{productDetails.data.product_detail.regular_price}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mb-2">
              <p> Promotion</p>
              <p className="bg-[#e44d2e] text-white px-2 py-0.5 rounded text-xs w-fit">
                Min. spend ৳550
              </p>
            </div>

            {/* Color Selection */}

            <div className="mb-6">
              <div className="font-semibold mb-1">Quantity</div>

              <div className="flex items-center justify-between border border-gray-200 rounded-full w-fit px-1 py-1">
                <button
                  onClick={decreaseQty}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-xl flex items-center justify-center hover:bg-gray-200 transition"
                >
                  -
                </button>

                <div className="w-10 text-center text-black text-[14px]">
                  {quantity}
                </div>

                <button
                  onClick={increaseQty}
                  disabled={quantity >= maxQuantity}
                  className={`w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-xl flex items-center justify-center transition ${
                    quantity >= maxQuantity
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-200"
                  }`}
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-green-700 text-white font-bold py-3 rounded cursor-pointer hover:bg-green-800 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* --right optiom- */}
        <div className="flex flex-col gap-4 text-gray-800 text-sm max-w-md">
          {/* Delivery Options */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-4">Delivery Options</h3>

            <div className="flex items-start gap-3 mb-3">
              <div className="text-green-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5H4a1 1 0 011 1v1h10V6a1 1 0 011-1h.828a1 1 0 01.707 1.707L16.414 8H3.586l-1.121-1.293A1 1 0 013.172 5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Regular</p>
                <p className="text-gray-500">Delivery within 2-3 days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 opacity-50">
              <div className="text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5H4a1 1 0 011 1v1h10V6a1 1 0 011-1h.828a1 1 0 01.707 1.707L16.414 8H3.586l-1.121-1.293A1 1 0 013.172 5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-red-500">
                  Express{" "}
                  <span className="text-xs font-normal text-red-500 ml-1">
                    Not Available
                  </span>
                </p>
                <p className="text-gray-400">Delivery within 24 Hours.</p>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-4">Sold by</h3>

            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://via.placeholder.com/40"
                alt="shop logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-base">BD FASHION HOUSE</p>
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a1 1 0 01.894.553l1.382 2.763 3.047.443a1 1 0 01.555 1.706l-2.203 2.147.52 3.029a1 1 0 01-1.451 1.054L10 12.347l-2.744 1.444a1 1 0 01-1.451-1.054l.52-3.029-2.203-2.147a1 1 0 01.555-1.706l3.047-.443 1.382-2.763A1 1 0 0110 2z" />
                  </svg>
                </div>
                <div className="inline-flex items-center px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded mt-1">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.5 12.5 1 8.91l6.061-.909L10 2l2.939 6.001L19 8.91 14.5 12.5l1.378 5.59z" />
                  </svg>
                  Rising Star
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mb-3">
              <button className="flex-1 border border-green-500 text-green-600 py-1 rounded font-semibold hover:bg-green-50 transition">
                Chat Now
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-1 rounded font-semibold hover:bg-gray-50 transition">
                View Shop
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 text-center text-xs text-gray-600 font-medium">
              <div>
                <p className="text-base text-black font-bold">100%</p>
                <p>Ship on Time</p>
              </div>
              <div>
                <p className="text-base text-black font-bold">90%</p>
                <p>Chat Response</p>
              </div>
              <div>
                <p className="text-base text-black font-bold">99.8%</p>
                <p>Shop Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="relative my-5 ml-30 w-[80em] bg-white p-10 rounded-[10px]">
        <h3 className="mb-2 text-lg font-semibold">Description</h3>
        <div
          className={`relative transition-all duration-300 overflow-hidden ${
            showFullDescription ? "" : "max-h-32"
          }`}
        >
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {description}
          </p>
          {!showFullDescription && (
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-black font-semibold border-none bg-transparent cursor-pointer flex items-center gap-1"
          >
            See {showFullDescription ? "Less" : "More"}{" "}
            <span>
              {showFullDescription ? (
                <IoIosArrowUp className="font-bold" />
              ) : (
                <IoIosArrowDown className="font-bold" />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
