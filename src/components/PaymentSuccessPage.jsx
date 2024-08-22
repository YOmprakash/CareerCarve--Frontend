import { useLocation } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const location = useLocation();
  const { mentor, duration, amount } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-900 bg-white">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">Payment Successful!</h1>
        <p className="mb-4 text-lg">Your booking was successful!</p>
        
        {mentor && (
          <div className="p-4 mb-4 bg-gray-100 rounded shadow-md">
            <h2 className="mb-2 text-xl font-semibold">Booking Details</h2>
            <p className="text-lg font-medium">Mentor: {mentor.name}</p>
            <p className="text-lg font-medium">Duration: {duration} mins</p>
            <p className="text-lg font-medium">Total Amount: ₹{amount}</p>
          </div>
        )}

        <p className="text-lg">Thank you for booking with us!</p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
