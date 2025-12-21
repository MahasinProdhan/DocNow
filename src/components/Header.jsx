import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col flex-wrap px-6 rounded-lg md:flex-row bg-primary md:px-10 lg:px-20">
      {/* ---------LEFT SIDE-------- */}
      <div className="flex flex-col items-start justify-center gap-4 py-10 m-auto md:w-1/2 md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col items-center gap-3 text-sm font-light text-white md:flex-row">
          <img className="w-28 " src={assets.group_profiles} />
          <p>
            Simply browse through our extensive list of trusted doctors, ,
            <br className="hiddens sm:block" />
            schedule your hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 px-8 py-3 m-auto text-sm transition-all duration-300 bg-white rounded-full text-grey-600 md:m-0 hover:scale-105"
        >
          Book Appontment <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ---------RIGHT SIDE-------- */}
      <div className="relative md:w-1/2">
        <img
          className="bottom-0 w-full h-auto rounded-lg md:absolute"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
