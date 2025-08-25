import React from "react";
import Navbar from "../components/Navbar";
import pfp from "/pfp.jpg";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col gap-8 pb-32">
        {/* Profile Header */}
        <section className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-b-3xl shadow-md pb-10">
          <span className="font-semibold text-gray-600 text-sm mt-4 mb-6">
            Profile
          </span>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="relative">
              <img
                src={pfp}
                alt="profile picture"
                className="rounded-full w-28 h-28 object-cover border-4 border-white shadow-lg"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-md"></span>
            </div>
            <span className="font-bold text-2xl text-gray-800">
              Aayush Laddha
            </span>
            <span className="font-medium text-gray-500 text-sm">
              Member since Aug 2025
            </span>
          </div>
        </section>

        {/* Account Section */}
        <section className="px-5">
          <span className="uppercase text-gray-400 text-xs font-semibold tracking-wider">
            Account
          </span>
          <ul className="mt-3 bg-white shadow-sm rounded-xl overflow-hidden divide-y divide-gray-100">
            <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer font-medium text-gray-700">
              Contact Details
            </li>
            <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer font-medium text-gray-700">
              Payment Methods
            </li>
            <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer font-medium text-gray-700">
              Previous Bookings
            </li>
          </ul>
        </section>

        {/* Support Section */}
        <section className="px-5">
          <span className="uppercase text-gray-400 text-xs font-semibold tracking-wider">
            Support
          </span>
          <ul className="mt-3 bg-white shadow-sm rounded-xl overflow-hidden divide-y divide-gray-100">
            <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer font-medium text-gray-700">
              Terms of Service
            </li>
            <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer font-medium text-gray-700">
              Privacy Policy
            </li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="px-5">
          <span className="uppercase text-gray-400 text-xs font-semibold tracking-wider">
            Contact Us
          </span>
          <ul className="mt-3 bg-white shadow-sm rounded-xl overflow-hidden divide-y divide-gray-100">
            <li className="py-4 px-4 font-medium text-gray-700">
              +91 8420996300
            </li>
            <li className="py-4 px-4 font-medium text-gray-700">
              contact@handyconnect.in
            </li>
          </ul>
        </section>
      </div>

      <Navbar />
    </>
  );
};

export default Profile;
