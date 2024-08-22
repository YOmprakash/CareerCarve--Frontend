import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mentor, duration, amount } = location.state || {};

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here

    // Navigate to the success page after successful payment
    navigate('/payment-success', { state: { mentor, duration, amount } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-900 bg-white">
      <div className="mb-6 text-center">
        <h1 className="mb-4 text-2xl font-bold">Payment Details</h1>
        <div className="p-4 mb-4 bg-gray-100 rounded shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Booking Details</h2>
          <p className="text-lg font-medium">Mentor: {mentor.name}</p>
          <p className="text-lg font-medium">Duration: {duration} mins</p>
          <p className="text-lg font-medium">Total Amount: ₹{amount}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <label className="block mb-4">
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </label>

        <label className="block mb-4">
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </label>

        <label className="block mb-4">
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </label>

        <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
