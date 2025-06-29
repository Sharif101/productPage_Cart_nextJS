import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

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
          <div
            key={product.id}
            className="cursor-pointer bg-white p-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 group"
          >
            <Link href={`/products/${product.slug}`}>
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-2">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
                {product.badges?.length > 0 && (
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {product.badges[0].name}
                  </span>
                )}
              </div>

              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-semibold line-clamp-2 transition-colors duration-300 text-[#00A788]">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-black ml-2 whitespace-nowrap">
                  ৳{parseFloat(product.discount_price).toLocaleString()}
                </p>
              </div>

              <p className="text-xs text-gray-500 mb-1">
                Stock: {product.available_stock}
              </p>

              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-green-500">
                  ({discountPercentage}% Off)
                </p>
              </div>

              <p className="text-sm text-gray-400 line-through">
                ৳{parseFloat(product.regular_price).toLocaleString()}
              </p>

              <div className="flex items-center text-yellow-400 text-xs gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < product.rating_avg
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-1 text-gray-500">
                  ({product.rating_count})
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
