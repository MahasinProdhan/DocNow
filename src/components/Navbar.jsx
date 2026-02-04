import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
    setShowMenu(false);
  };

  return (
    <div className="relative flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="object-contain h-12 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="items-start hidden gap-6 font-medium md:flex">
        <NavLink to="/">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Desktop User / Button */}
        {token && userData ? (
          <div className="relative items-center hidden gap-2 cursor-pointer md:flex group">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={userData.image}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            <div className="absolute right-0 z-20 hidden pt-8 top-full group-hover:block">
              <div className="flex flex-col gap-4 p-4 text-gray-600 bg-white rounded min-w-48">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointment
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden px-8 py-3 font-light text-white rounded-full md:block bg-primary"
          >
            Create Account
          </button>
        )}

        {/* Hamburger Icon (Mobile) */}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-6 mr-1 cursor-pointer md:hidden"
        />
      </div>

      {/* ---------------- Mobile Menu ---------------- */}
      <div
        className={`${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 overflow-hidden z-30 bg-white transition-all duration-300`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img
            onClick={() => navigate("/")}
            className="h-10 cursor-pointer"
            src={assets.logo}
            alt="Logo"
          />
          <img
            className="w-8 cursor-pointer"
            src={assets.cross_icon}
            alt="close"
            onClick={() => setShowMenu(false)}
          />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            ALL DOCTORS
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            CONTACT
          </NavLink>

          {token && userData ? (
            <>
              <hr className="w-1/2 my-4" />
              <p
                onClick={() => {
                  navigate("/my-profile");
                  setShowMenu(false);
                }}
                className="cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => {
                  navigate("/my-appointments");
                  setShowMenu(false);
                }}
                className="cursor-pointer"
              >
                My Appointment
              </p>
              <p onClick={logout} className="cursor-pointer">
                Logout
              </p>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setShowMenu(false);
              }}
              className="px-8 py-3 mt-6 text-white rounded-full bg-primary"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
