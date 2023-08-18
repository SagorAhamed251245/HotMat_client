import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ProductDetails = ({ productData }) => {
  return (
    <div className=" w-full">
      <h3 className="text-gray-700 text-4xl font-medium">
        {productData?.title}
      </h3>
      <div className="flex items-center mt-4 gap-2">
        <Rating
          placeholderRating={productData?.rating}
          emptySymbol={<FaRegStar className="text-yellow-400" size={18} />}
          placeholderSymbol={<FaStar className="text-yellow-400" size={18} />}
          fullSymbol={<FaStar className="text-yellow-400" size={18} />}
          readonly
        />

        <div className="text-gray-500 dark:text-gray-50 font-medium text-base">
          <span>{productData?.rating}</span>
          <span className="text-[#32B900] "> (1 customer review)</span>
        </div>
      </div>
      <p className="text-[#34B701] font-medium text-2xl mt-4">
        ${productData?.price}
      </p>
      <p className="text-base my-3 text-gray-500 dark:text-white">
        {productData?.details?.description}
      </p>
      <p
        className={`text-sm ${
          productData?.stock_quantity > 10 ? "text-green-500" : "text-red-500"
        } dark:text-white font-medium`}
      >
        {productData?.stock_quantity} in stock
      </p>

      <div className="flex items-center gap-5 !mt-5">
        <button className="flex justify-center items-center gap-2 text-[#34B701] font-medium text-2xl bg-green-100 px-6 py-1.5 rounded hover:bg-green-200">
          <AiOutlineShoppingCart size={24} /> Add{" "}
        </button>
        <Link href={"/payment"}>
          <button
            disabled={productData?.stock === "Out of stock"}
            className="flex justify-center items-center gap-2 bg-[#ff6347cc]  text-white px-6 py-1.5 rounded text-2xl  disabled:opacity-60 hover:bg-[#FF7B13]"
          >
            Buy Now
          </button>
        </Link>
      </div>
      <p className="text-base mb-3 mt-5 text-gray-500 dark:text-white">
        Category:{" "}
        <span className="text-green-500">{productData?.category}</span>
      </p>
      <p className="text-base mb-3  text-gray-500 dark:text-white">
        Sub Category:{" "}
        <span className="text-green-500">
          {productData?.sub_category &&
            productData?.sub_category.map((item, i) => (
              <span className="capitalize" key={i}>
                {item},{" "}
              </span>
            ))}
        </span>
      </p>
    </div>
  );
};

export default ProductDetails;