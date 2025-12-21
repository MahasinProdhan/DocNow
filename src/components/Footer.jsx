import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* LEFT SECTION */}
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="w-full leading-6 md:w-2/3 text-grey-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        {/* CENTER SECTION */}
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gary-600">
            <li>Home </li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privecy POlicy</li>
          </ul>
        </div>
        {/* RIGHT SECTION */}
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gary-600">
            <li>+91 9732296975</li>
            <li>mahasinprodhan2@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------------------------COPYRIGHT TEXT------------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Greatstack.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
