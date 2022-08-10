import React from "react";
import Layout from "../component/Layout";
import Slider from "../component/Slider";
import axios from "axios";
import ProductItem from "../component/ProductItem";
const index = ({ product }) => {
  return (
    <Layout title="Home">
      <Slider />
      <div className="flex flex-col bg-lime-50">
        <h1 className="flex items-center text-3xl justify-center mt-4 ">
          Top Product this Week
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
          {product.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
export const getServerSideProps = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/product?skip=0&limit=4"
  );
  return {
    props: {
      product: response.data,
    },
  };
};
