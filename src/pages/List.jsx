import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const work = ["Plumbing", "Electrical", "Carpentry", "Pest Control"]

const List = () => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [selectedWork, setSelectedWork] = useState("")
  const [submitting, setSubmitting] = useState(false)

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
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center px-5 pb-25'>
        <span className='font-bold text-lg mb-10 pt-5'>List Your Services</span>

        <form onSubmit={submitHandler}>
          <div className='flex flex-col gap-5'>
            {/* Service name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Service Name (e.g., Plumbing, Electrical)"
              className="bg-gray-200 rounded-md p-2"
              required
            />

            {/* Description */}
            <textarea
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your requirement in detail"
              className="bg-gray-200 rounded-md p-2"
              required
            />

            {/* Work type radio buttons */}
            <div className="flex gap-3 flex-wrap">
              {work.map((item, index) => (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    name="work"
                    value={item}
                    onChange={(e) => setSelectedWork(e.target.value)}
                    className="hidden peer"
                    required
                  />
                  <span className="font-semibold text-md px-2 py-1 bg-gray-200 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white">
                    {item}
                  </span>
                </label>
              ))}
            </div>

            {/* Price */}
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="bg-gray-200 rounded-md p-2"
              required
            />

            {/* Location */}
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="bg-gray-200 rounded-md p-2"
              required
            />

            {/* Preferred Date and Time */}
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="date" className="mb-1 text-sm font-medium">Preferred Date</label>
                <input
                  id="date"
                  type="date"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="time" className="mb-1 text-sm font-medium">Preferred Time</label>
                <input
                  id="time"
                  type="time"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>



          <button
            type="submit"
            disabled={submitting}
            className="font-bold bg-blue-500 text-white rounded-md p-2 flex items-center justify-center min-w-[100px]"
          >
            {submitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
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
          </button>

      </div>
    </form >
      </div >
  <Navbar />
    </>
  )
}

export default List