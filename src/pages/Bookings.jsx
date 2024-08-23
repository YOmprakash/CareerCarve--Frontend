import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://careercarve-backend-41i7.onrender.com/api/bookings")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the bookings!", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-white">
      <h2 className="mt-12 mb-8 text-3xl font-bold text-gray-800">Bookings</h2>

      {loading ? (
        <Oval
          height={50}
          width={50}
          color="#1C8EA8"
          visible={true}
          ariaLabel="loading-spinner"
        />
      ) : bookings.length > 0 ? (
        <div>
          <table className="w-full text-left bg-white border rounded-lg shadow-lg">
            <thead className="bg-[#1C8EA8] text-white">
              <tr>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">
                  Mentor ID
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">
                  Mentor Name
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">
                  Duration (minutes)
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {bookings.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b">{booking.mentorId}</td>
                  <td className="px-6 py-4 border-b">
                    {booking.mentorName || "N/A"}
                  </td>
                  <td className="px-6 py-4 border-b">{booking.duration}</td>
                  <td className="px-6 py-4 border-b">
                    ₹{booking.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 border-b">
                    {new Date(booking.timestamp).toLocaleString()}
                  </td>
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
