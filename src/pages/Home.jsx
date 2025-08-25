import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import pfp from "/pfp.jpg";
import { motion } from "framer-motion";
import {
  Wrench,
  Plug,
  Hammer,
  Bug,
  CalendarCheck,
  ListPlus,
  ShoppingBag,
} from "lucide-react";

const services = [
  { id: 1, name: "Plumbing", icon: <Wrench size={28} strokeWidth={1.8} /> },
  { id: 2, name: "Electrical", icon: <Plug size={28} strokeWidth={1.8} /> },
  { id: 3, name: "Carpentry", icon: <Hammer size={28} strokeWidth={1.8} /> },
  { id: 4, name: "Pest Control", icon: <Bug size={28} strokeWidth={1.8} /> },
];

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-6 pb-32">
        {/* Header */}
        <motion.section
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-b-3xl shadow-md pb-6"
        >
          <span className="font-semibold text-gray-600 text-sm mt-4">
            HandyConnect
          </span>
        </motion.section>

        {/* Welcome User */}
        <section className="px-6 flex items-center gap-4">
          <img
            src={pfp}
            alt="profile"
            className="w-14 h-14 rounded-full object-cover border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-800">
              Welcome back, Aayush 👋
            </span>
            <span className="text-sm text-gray-500">What do you need today?</span>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="px-6">
          <div className="grid grid-cols-3 gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 rounded-2xl shadow-sm py-4"
            >
              <CalendarCheck size={22} />
              <Link className="text-xs font-semibold" to="/search">Book Service</Link>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 rounded-2xl shadow-sm py-4"
            >
              <ShoppingBag size={22} />
              <span className="text-xs font-semibold">My Bookings</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 rounded-2xl shadow-sm py-4"
            >
              <ListPlus size={22} />
              <Link className="text-xs font-semibold" to="/list">List Service</Link>
            </motion.button>
          </div>
        </section>

        {/* Featured Services */}
        <section className="px-6">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            Featured Services
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center bg-white border border-gray-100 rounded-2xl shadow-sm p-5 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
                  {service.icon}
                </div>
                <span className="mt-3 font-medium text-gray-700">
                  {service.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Promotion */}
        <section className="px-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg p-5">
            <h3 className="font-bold text-lg">Special Offer 🎉</h3>
            <p className="text-sm text-indigo-100 mt-1">
              Get 20% off on your first booking. Limited time only!
            </p>
          </div>
        </section>
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </>
  );
};

export default Home;
