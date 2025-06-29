"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import logo from "../../asstes/logo/logo.png";
import apple from "../../asstes/png/apple.png";
import google from "../../asstes/png/Google.png";
import img1 from "../../asstes/png/Badge (1).png";
import img2 from "../../asstes/png/Badge (2).png";
import img3 from "../../asstes/png/Badge (3).png";
import img4 from "../../asstes/png/Badge (4).png";

export default function Footer() {
  return (
    <footer className="bg-[#0C1327] text-white py-10">
      <div className="max-w-8xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-end">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Image src={logo} alt="Falcon Logo" width={30} height={30} />
              FALCON
            </div>
            <p className="text-sm mt-3">
              Experience our new platform & enjoy exiting deals and offers on
              your day to day
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <MdLocationOn className="text-black text-lg" />
                </span>
                House #64, Road 13, ASA Center, Uttara, Dhaka-1402
              </p>
              <p className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <MdPhone className="text-black text-lg" />
                </span>
                01729-1497201
              </p>
              <p className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <MdEmail className="text-black text-lg" />
                </span>
                falcon@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
              <li>
                <Link href="#">Cancellation & Returns</Link>
              </li>
              <li>
                <Link href="#">Terms of Use</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Payments</Link>
              </li>
              <li>
                <Link href="#">Shipping</Link>
              </li>
              <li>
                <Link href="#">My Orders</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Terms of Use</Link>
              </li>
              <li>
                <Link href="#">Security</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-[#94A3B8] text-[#94A3B8] mb-3">
              Need Support?
            </h3>
            <div className="border border-[#F1F5F9] p-2 rounded-md w-fit mb-5 text-sm">
              10724-7814XX
            </div>
            <h3 className="font-[#94A3B8] text-[#94A3B8] mb-3">DOWNLOAD APP</h3>
            <div className="flex flex-col gap-2">
              <Image src={google} alt="Google Play" width={150} height={45} />
              <Image src={apple} alt="App Store" width={150} height={45} />
            </div>
          </div>
        </div>

        <div className="pt-6 text-sm flex items-center justify-between">
          <div className="flex gap-4 mt-4 text-xl">
            <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <FaFacebookF className="text-black text-lg" />
            </span>
            <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <FaInstagram className="text-black text-lg" />
            </span>
            <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <FaTwitter className="text-black text-lg" />
            </span>
          </div>

          <div className="flex items-center gap-1">
            <p className="mb-2 text-[#94A3B8]">PAYMENTS ACCEPTED</p>
            <Image src={img1} alt="MasterCard" width={80} height={30} />
            <Image src={img2} alt="American Express" width={80} height={30} />
            <Image src={img3} alt="Bkash" width={80} height={30} />
            <Image src={img4} alt="Rocket" width={80} height={30} />
          </div>
        </div>

        <p className="text-white-400 text-[12px] text-center">
          Falcon © 2025. Design by sharif
        </p>
      </div>
    </footer>
  );
}
