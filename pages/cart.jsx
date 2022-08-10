import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../component/Layout";

const cart = () => {
  return (
    <Layout title="Shoping Cart">
      <h1 classsName="mb-4 text-xl">Shoping Cart</h1>
      {/* {cart.products.length === 0 ? (
        <div>
          Cart Is Empty. <Link href="/products">Go Shoping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map((item) => (
                  <tr key={item.slug}>
                    <td className="p-5 text-left">
                      <a className="flex items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}></Image>
                        &nbsp;
                        {item.name}
                      </a>
                    </td>
                    <td className="p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => handleRemove(item)}>
                        <Image
                          src="/images/trash.png"
                          alt={item.name}
                          width={30}
                          height={30}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({cart.quantity}): $ {cart.total}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("login?redirect=/shipping")}
                  className="primary-button w-full">
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div> */}
      {/* )} */}
    </Layout>
  );
};

export default cart;
