import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from the backend
    axios.get('http://localhost:5000/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the bookings!", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Bookings</h2>
      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left bg-white border rounded-lg shadow-lg">
            <thead className="bg-[#1C8EA8] text-white">
              <tr>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">Mentor ID</th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">Mentor Name</th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">Duration (minutes)</th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">Amount</th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {bookings.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b">{booking.mentorId}</td>
                  <td className="px-6 py-4 border-b">{booking.mentorName || 'N/A'}</td>
                  <td className="px-6 py-4 border-b">{booking.duration}</td>
                  <td className="px-6 py-4 border-b">${booking.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 border-b">{new Date(booking.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-8 text-lg text-gray-500">No bookings available.</p>
      )}
    </div>
  );
};

export default Bookings;
