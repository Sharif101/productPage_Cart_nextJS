"use client";

import Image from "next/image";
import logo from "../../asstes/logo/logo.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="bg-[#0C1327] py-4 px-6 md:px-12">
      <nav className="max-w-8xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Image src={logo} alt="Logo" width={30} height={30} />
          FALCON
        </div>

        <div className="flex-1 max-w-4xl">
          <div className="flex bg-white rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search for anything...."
              className="flex-1 px-4 py-2 outline-none text-sm text-gray-700"
            />
            <button className="bg-[#00C6A2] px-4 flex items-center justify-center text-white">
              <FiSearch size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white text-xl">
          <div className="relative">
            <HiOutlineShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
              12
            </span>
          </div>

          <FaRegUser size={20} />
        </div>
      </nav>
    </div>
  );
}
