import React from "react";
import Navbar from "../components/Navbar";
import pfp from "/pfp.jpg";

const notifications = [
  {
    id: 1,
    type: "booking",
    title: "Booking Confirmed",
    message: "Your booking for Electrician Service is confirmed for Aug 28, 2025.",
    img: pfp,
  },
  {
    id: 2,
    type: "rating",
    title: "Rating Submitted",
    message: "You rated Plumber Service 5 stars. Thank you for your feedback!",
    img: pfp,
  },
  {
    id: 3,
    type: "cancelled",
    title: "Booking Cancelled",
    message: "Your booking for Cleaning Service on Aug 25, 2025 has been cancelled.",
    img: pfp,
  },
];

const Notification = () => {
  return (
    <>
      <div className="flex flex-col gap-6 pb-32">
        {/* Header */}
        <section className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-b-3xl shadow-md pb-6">
          <span className="font-semibold text-gray-600 text-sm mt-4">
            Notifications
          </span>
        </section>

        {/* Notification List */}
        <section className="px-5">
          <ul className="bg-white shadow-lg rounded-xl divide-y divide-gray-100">
            {notifications.map((note) => (
              <li
                key={note.id}
                className="flex items-start gap-4 py-4 px-4 hover:bg-gray-50 cursor-pointer"
              >
                {/* Profile Img */}
                <img
                  src={note.img}
                  alt="pfp"
                  className="w-12 h-12 rounded-full object-cover border"
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
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Navbar />
    </>
  );
};

export default Notification;
