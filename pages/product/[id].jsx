import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../component/Layout";
import axios from "axios";

const ProductId = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      false;
    }
  };
  const handleClickCart = () => {};
  return (
    <div className="  bg-lime-200">
      <Layout>
        <Link href="/products">
          <p className="underline cursor-pointer p-4">See Another product</p>
        </Link>
        <div className=" grid md:grid-cols-4 md:gap-3 p-5">
          <div className="md:col-span-2 flex items-center">
            <Image
              src={productId.image}
              alt={productId.title}
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
          <div>
            <ul className="text-lg ">
              <li>{productId.title}</li>
              <li>Category: category</li>
              <li>Rating: 4 of 5 reviews</li>
              <li className="flex items-center ">
                <Image
                  src="/image/minus.png"
                  alt=""
                  width={25}
                  height={25}
                  onClick={handleMinus}
                  className="cursor-pointer"
                />
                <span className="text-lg p-2  rounded ">{quantity}</span>
                <Image
                  src="/image/plus.png"
                  alt=""
                  width={20}
                  height={20}
                  onClick={handlePlus}
                  className="cursor-pointer"
                />
              </li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="flex justify-between mb-2">
                <p>
                  <b>Price</b> : Rp {productId.price},00
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <button
                  className="primary-button w-full"
                  onClick={handleClickCart}>
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductId;
export const getServerSideProps = async ({ params }) => {
  const response = await axios.get(
    `http://localhost:3000/api/product/${params.id}`
  );
  return {
    props: {
      productId: response.data,
    },
  };
};
