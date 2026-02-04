import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

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

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ALL DOCTORS", path: "/doctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="relative flex items-center py-4 mb-5 text-sm border-b border-gray-400">
      {/* LEFT : LOGO */}
      <img
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate("/")}
        className="object-contain h-12 cursor-pointer"
      />

      {/* CENTER : DESKTOP MENU */}
      <ul className="absolute hidden gap-8 font-semibold -translate-x-1/2 left-1/2 md:flex">
        {menuItems.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {({ isActive }) => (
              <li className="flex flex-col items-center cursor-pointer">
                <span className="inline-block">
                  {item.name}
                  <span
                    className={`block h-0.5 bg-primary mt-1 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </span>
              </li>
            )}
          </NavLink>
        ))}
      </ul>

      {/* RIGHT : ACTIONS */}
      <div className="flex items-center gap-4 ml-auto">
        {/* USER (DESKTOP) */}
        {token && userData ? (
          <div className="relative items-center hidden gap-2 cursor-pointer md:flex group">
            <img
              src={userData.image}
              alt="user"
              className="object-cover rounded-full w-9 h-9"
            />
            <img src={assets.dropdown_icon} alt="" className="w-2.5" />

            {/* Dropdown */}
            <div className="absolute right-0 z-20 hidden pt-6 top-full group-hover:block">
              <div className="flex flex-col gap-3 p-4 bg-white rounded shadow min-w-44">
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
                  My Appointments
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

        {/* HAMBURGER (MOBILE) */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-6 cursor-pointer md:hidden"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <div
        className={`${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 bg-white z-30 overflow-hidden transition-all duration-300`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img src={assets.logo} alt="Logo" className="h-10" />
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-8 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-6 mt-12 text-lg font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setShowMenu(false)}
            >
              {item.name}
            </NavLink>
          ))}

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
                My Appointments
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
