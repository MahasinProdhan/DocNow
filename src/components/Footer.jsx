import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl md:px-10">
        <div className="grid grid-cols-1 gap-12 py-16 text-sm text-gray-600 sm:grid-cols-2 md:grid-cols-4">
          {/* ABOUT */}
          <div className="md:col-span-2">
            <img className="w-40 mb-4" src={assets.logo} alt="Logo" />
            <p className="max-w-md leading-6">
              Book doctor appointments online with ease. Consult trusted
              healthcare professionals, manage appointments, and make secure
              online payments — all in one place.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="mb-4 text-base font-semibold text-gray-800">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-black">Home</li>
              <li className="cursor-pointer hover:text-black">Find Doctors</li>
              <li className="cursor-pointer hover:text-black">
                Book Appointment
              </li>
              <li className="cursor-pointer hover:text-black">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-4 text-base font-semibold text-gray-800">
              Support
            </p>
            <ul className="space-y-2">
              <li>📞 +91 97322 96975</li>
              <li>✉️ mahasinprodhan2@gmail.com</li>
              <li>💳 Secure Online Payments</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="py-6 text-xs text-center text-gray-500 border-t">
          © {new Date().getFullYear()} Mahasin Prodhan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
