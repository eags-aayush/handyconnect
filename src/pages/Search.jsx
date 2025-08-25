import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import jobsData from "./jobsData";

const Search = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [filters, setFilters] = useState({
    experience: "",
    verified: null,
    languages: [],
  });

  // Toggle language selection
  const toggleLanguage = (lang) => {
    setFilters((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter((l) => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({ experience: "", verified: null, languages: [] });
  };

  // Apply Filters
  const applyFilters = () => {
    setShowFilter(false);
  };

  // Count active filters
  const activeFilterCount =
    (filters.experience ? 1 : 0) +
    (filters.verified !== null ? 1 : 0) +
    (filters.languages.length > 0 ? 1 : 0);

  // Filter + Search + Sort logic
  const filteredJobs = useMemo(() => {
    let results = jobsData;

    // Search filter
    if (searchTerm.trim()) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Experience filter
    if (filters.experience) {
      results = results.filter((job) => job.experience === filters.experience);
    }

    // Verification filter
    if (filters.verified !== null) {
      results = results.filter((job) => job.verified === filters.verified);
    }

    // Languages filter (OR condition)
    if (filters.languages.length > 0) {
      results = results.filter((job) =>
        job.languages.some((lang) => filters.languages.includes(lang))
      );
    }

    // Sorting
    if (sortBy === "priceLow") {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHigh") {
      results = [...results].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      results = [...results].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      results = [...results].sort((a, b) => b.id - a.id);
    }

    return results;
  }, [searchTerm, filters, sortBy]);

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
            Search Jobs
          </span>
        </motion.section>

        {/* Search Input */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="px-5 flex flex-col gap-6"
        >
          {/* Search Box */}
          <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for plumber, electrician..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Sort & Filter */}
          <div className="flex flex-row justify-between items-center">
            {/* Sort */}
            <div className="w-1/2 flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-gray-600 font-medium text-sm"
              >
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg shadow-sm px-3 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-indigo-400"
              >
                <option value="relevance">Relevance</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Filter */}
            <div className="w-1/2 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilter(true)}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg text-sm"
              >
                {activeFilterCount > 0
                  ? `Filters (${activeFilterCount})`
                  : "Filters"}
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <section className="px-5">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-4 mt-6">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white shadow-md rounded-2xl p-4 flex gap-4 items-start hover:shadow-lg transition"
                >
                  {/* Profile Image */}
                  <img
                    src={job.image}
                    alt={job.name}
                    className="w-16 h-16 rounded-full object-cover border"
                  />

                  {/* Details */}
                  <div className="flex flex-col flex-1">
                    {/* Name + Verification */}
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-gray-800 text-lg">
                        {job.name}
                      </p>
                      {job.verified && (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-1">
                      {job.description}
                    </p>

                    {/* Price */}
                    <p className="text-indigo-600 font-semibold mb-1">
                      ₹{job.price}
                    </p>

                    {/* Exp + Lang + Rating */}
                    <p className="text-sm text-gray-700">
                      {job.experience} • {job.languages.join(", ")} •{" "}
                      <span className="inline-flex items-center ml-1">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {job.rating}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400 text-sm italic mt-6">
              No jobs found matching your search.
            </div>
          )}
        </section>
      </div>

      {/* Filter Panel */}
      {/* (unchanged, keeping your existing filter modal code) */}

      <Navbar />
    </>
  );
};

export default Search;
