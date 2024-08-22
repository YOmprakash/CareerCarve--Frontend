import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mentor, duration, amount } = location.state || {};

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Handle payment processing here

      // After successful payment, confirm the booking
      await axios.post('http://localhost:5000/api/bookings', {
        mentorId: mentor.id,
        duration,
        amount,
       
      });

      // Navigate to the success page after confirming the booking
      navigate('/payment-success', { state: { mentor, duration, amount } });
    } catch (error) {
      console.error("Payment or booking confirmation failed!", error);
    }
  };

  return (
    <div className='min-h-screen px-4 py-8 bg-white md:px-16'>
    <h2 className="mb-4 text-2xl font-normal text-left ">Let's make your checkout smooth!</h2>
    <div className="flex flex-col justify-center text-gray-900 md:flex-row ">
     

       
        {/* Left side: Billing Form */}
        <div className="w-full mb-6 md:w-1/2 md:mb-0 md:mr-6">
         <h2>Billing Details</h2>
          <form onSubmit={handleSubmit}>
          
            <label className="block mb-4">
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded "
                required
              />
            </label>

            <label className="block mb-4">
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </label>
            <label className="block mb-4">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </label>

            <label className="block mb-4">
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </label>

            <label className="block mb-4">
              Country:
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add more countries as needed */}
              </select>
            </label>

            <label className="block mb-4">
              State:
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded"
                required
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                {/* Add more states as needed */}
              </select>
            </label>


          </form>
        </div>

        {/* Right side: Shopping Bag */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-2xl font-bold">Your Shopping Bag</h2>
          <div className="p-4 mb-4 bg-gray-100 rounded shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Booking Details</h3>
            <p className="text-lg font-medium">Mentor: {mentor.name}</p>
            <p className="text-lg font-medium">Duration: {duration} mins</p>
            <p className="text-lg font-medium">Total Amount: ₹{amount}</p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
