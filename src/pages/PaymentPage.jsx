import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mentor, duration, amount } = location.state || {};

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !country ||
      !state
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post(
        "https://careercarve-backend-41i7.onrender.com/api/bookings",
        {
          mentorId: mentor.id,
          mentorName: mentor.name,
          duration,
          amount,
        }
      );

      navigate("/payment-success", { state: { mentor, duration, amount } });
    } catch (error) {
      console.error("Payment or booking confirmation failed!", error);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 md:px-16">
      <h2 className="mb-4 text-2xl font-semibold text-left text-gray-800 md:text-3xl">
        Let's make your checkout smooth!
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Left side: Billing Form */}
        <div className="w-full p-6 mb-6 bg-white rounded shadow-md md:w-1/2 md:mb-0 md:mr-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Billing Details
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-600">First Name:</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-600">Last Name:</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-600">Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-600">Phone Number:</span>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-600">Country:</span>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </label>

            <label className="block mb-4">
              <span className="text-gray-600">State:</span>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
              </select>
            </label>
          </form>
        </div>

        {/* Right side: Shopping Bag */}
        <div className="w-full p-6 bg-white rounded shadow-md md:w-1/2">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Your Shopping Bag
          </h2>
          <div className="p-4 mb-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-semibold text-gray-700">
              Booking Details
            </h3>
            <p className="mb-1 text-gray-600 text-md">
              Mentor: <span className="font-medium">{mentor.name}</span>
            </p>
            <p className="mb-1 text-gray-600 text-md">
              Duration: <span className="font-medium">{duration} mins</span>
            </p>
            <p className="mb-1 text-gray-600 text-md">
              Total Amount: <span className="font-medium">₹{amount}</span>
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 font-semibold text-white bg-[#1C8EA8] rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
