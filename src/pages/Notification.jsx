import React from "react";
import Navbar from "../components/Navbar";
import pfp from "/pfp.jpg";
import { motion } from "framer-motion";

const notifications = [
  {
    id: 1,
    type: "booking",
    title: "Booking Confirmed",
    message:
      "Your booking for Electrician Service is confirmed for Aug 28, 2025.",
    img: pfp,
  },
  {
    id: 2,
    type: "rating",
    title: "Rating Submitted",
    message:
      "You rated Plumber Service 5 stars. Thank you for your feedback!",
    img: pfp,
  },
  {
    id: 3,
    type: "cancelled",
    title: "Booking Cancelled",
    message:
      "Your booking for Cleaning Service on Aug 25, 2025 has been cancelled.",
    img: pfp,
  },
];

const Notification = () => {
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
            Notifications
          </span>
        </motion.section>

        {/* Notification List */}
        <section className="px-5">
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="bg-white shadow-lg rounded-xl divide-y divide-gray-100"
          >
            {notifications.map((note) => (
              <motion.li
                key={note.id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-start gap-4 py-4 px-4 rounded-xl cursor-pointer"
              >
                {/* Profile Img */}
                <motion.img
                  src={note.img}
                  alt="pfp"
                  className="w-12 h-12 rounded-full object-cover border shadow-sm"
                  whileHover={{ rotate: 5 }}
                />

                {/* Text */}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    {note.title}
                  </span>
                  <span className="text-gray-600 text-sm mt-1">
                    {note.message}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>

      <Navbar />
    </>
  );
};

export default Notification;
