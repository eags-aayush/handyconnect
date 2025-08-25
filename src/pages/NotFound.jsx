import React from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col gap-6 pb-32">
        {/* Header (same style as notifications) */}
        <motion.section
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-b-3xl shadow-md pb-6"
        >
          <span className="font-semibold text-gray-600 text-sm mt-4">
            Page Not Found
          </span>
        </motion.section>

        {/* 404 Content */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col justify-center items-center text-center px-6"
        >
          <motion.h1
            className="text-8xl font-extrabold text-gray-800 drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            404
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 text-lg max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </motion.p>

          <Link
            to="/home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
          >
            Go Back Home
          </Link>
        </motion.section>
      </div>

      <Navbar />
    </>
  );
};

export default NotFound;
