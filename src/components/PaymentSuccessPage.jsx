import { useLocation } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const location = useLocation();
  const { mentor, duration, amount } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="px-8 py-6 text-center bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="mb-6 text-lg text-gray-700">Your booking was successful!</p>

        {mentor && (
          <div className="p-6 mb-6 text-left rounded-lg shadow-inner bg-gray-50">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Booking Details</h2>
            <p className="mb-2 text-lg font-medium text-gray-700">Mentor: <span className="text-gray-900">{mentor.name}</span></p>
            <p className="mb-2 text-lg font-medium text-gray-700">Duration: <span className="text-gray-900">{duration} mins</span></p>
            <p className="mb-2 text-lg font-medium text-gray-700">Total Amount: <span className="text-gray-900">₹{amount}</span></p>
          </div>
        )}

        <p className="text-lg text-gray-700">Thank you for booking with us!</p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
