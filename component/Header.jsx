import Image from "next/image";
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="h-16 bg-lime-600 p-2 flex items-center">
      <div className=" container mx-auto flex justify-between items-center">
        <div className="left flex items-center ">
          <Image src="/image/fork.png" alt="" width={30} height={30} />

          <span className="text-3xl text-white font-bold ml-2 cursor-pointer">
            <Link href={`/`}>Vegan Food</Link>
          </span>
        </div>
        <div className="center">
          <div className="flex items-center bg-white border rounded-lg pr-1">
            <input
              type="text"
              placeholder="Search Food ..... "
              className="outline-none border-none p-1"
            />
            <Image src="/image/search.png" alt="" width={20} height={20} />
          </div>
        </div>
        <div className="right flex items-center p-2">
          <p className="p-1 text-2xl cursor-pointer font-medium text-white">
            Login
          </p>
          <p className="p-1 text-2xl mr-2 cursor-pointer font-medium text-white">
            Register
          </p>
          <Image src="/image/cart.png" alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
