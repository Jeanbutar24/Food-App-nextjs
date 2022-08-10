/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product._id}`}>
        <a>
          <Image
            src={product.image}
            alt={product.title}
            height="230px"
            width="180px"
            objectFit="contain"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product._id}`}>
          <a>
            <h2 className="text-lg">{product.title}</h2>
          </a>
        </Link>
        <p>Rp {product.price},00</p>
        <button className="primary-button " type="button">
          Add cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
