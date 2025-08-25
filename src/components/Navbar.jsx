import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  {
    path: "/list",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="14" y2="6" />
        <line x1="4" y1="12" x2="14" y2="12" />
        <line x1="4" y1="18" x2="10" y2="18" />
        <circle cx="18" cy="18" r="3" />
      </svg>
    ),
  },
  {
    path: "/search",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256">
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
    ),
  },
  {
    path: "/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0l.11.11,80,75.48A16,16,0,0,1,224,115.55Z" />
      </svg>
    ),
  },
  {
    path: "/notification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    path: "/profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256">
        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200 rounded-2xl px-6 py-3">
      <ul className="flex justify-between items-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center transition duration-200 ${
                  isActive
                    ? " bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 scale-110"
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              <motion.div whileTap={{ scale: 0.85 }}>
                {item.icon}
              </motion.div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
