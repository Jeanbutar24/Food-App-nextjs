import React from "react";
import ProductItem from "../component/ProductItem";
import axios from "axios";
import Layout from "../component/Layout";
const products = ({ product }) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-3">
        {product.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </Layout>
  );
};

export default products;
export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/product");
  return {
    props: {
      product: response.data,
    },
  };
};
