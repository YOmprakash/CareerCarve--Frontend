import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ selectedMentor }) => {
  const [duration, setDuration] = useState(30);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = duration === 30 ? 1000 : duration === 45 ? 1500 : 2000; // Example amounts
    navigate('/payment', { state: { mentor: selectedMentor, duration, amount } });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h3 className="mb-2 text-xl font-bold">Book a session with {selectedMentor.name}</h3>
      <label className="block mb-2">
        Select Duration:
        <select 
          value={duration} 
          onChange={(e) => setDuration(Number(e.target.value))}
          className="block w-full p-2 mt-1 border border-gray-300 rounded"
        >
          <option value={30}>30 mins</option>
          <option value={45}>45 mins</option>
          <option value={60}>60 mins</option>
        </select>
      </label>
      <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Proceed to Payment
      </button>
    </form>
  );
};

export default BookingForm;
