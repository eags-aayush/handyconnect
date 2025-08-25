import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const work = ["Plumbing", "Electrical", "Carpentry", "Pest Control"];

const List = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [selectedWork, setSelectedWork] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setDescription("");
      setPrice("");
      setLocation("");
      setSelectedWork("");
      navigate("/search");
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col gap-6 pb-32">

        {/* Header - same as Notification page */}
        <motion.section
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-b-3xl shadow-md pb-6"
        >
          <span className="font-semibold text-gray-600 text-sm mt-4">
            List Your Service
          </span>
        </motion.section>

        <section className="px-5">
          {/* Card */}
          <motion.form
            onSubmit={submitHandler}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mx-auto p-8 px-5 w-full max-w-lg bg-white shadow-2xl rounded-3xl space-y-8 border border-gray-100"
          >
            {/* Section: Basic Info */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Basic Info</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Service Name"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />

              <textarea
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your service"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
            </div>

            {/* Section: Work Info */}
            <div>
              <p className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Work Info
              </p>
              <div className="flex gap-3 flex-wrap">
                {work.map((item, index) => (
                  <label key={index} className="cursor-pointer mb-5">
                    <input
                      type="radio"
                      name="work"
                      value={item}
                      onChange={(e) => setSelectedWork(e.target.value)}
                      className="hidden peer"
                      required
                    />
                    <span className="font-medium text-sm px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-indigo-600 peer-checked:text-white transition shadow-sm">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section: Pricing & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
            </div>

            {/* Section: Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                  Preferred Time
                </label>
                <input
                  type="time"
                  className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={submitting}
              className="w-full font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full py-4 flex items-center justify-center shadow-md hover:shadow-xl transition disabled:opacity-70"
            >
              {submitting ? (
                <svg
                  className="animate-spin h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Submit"
              )}
            </motion.button>
          </motion.form>
        </section>
      </div>

      <Navbar />
    </>
  );
};

export default List;
