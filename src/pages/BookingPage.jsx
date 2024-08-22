import { useEffect, useState } from 'react';
import axios from 'axios';
import MentorCard from '../components/MentorCard';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon

const BookingPage = () => {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/mentors')
      .then(response => {
        setMentors(response.data);
        setFilteredMentors(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the mentors!", error);
      });
  }, []);

  useEffect(() => {
    // Filter mentors based on search term and area of interest
    const filtered = mentors.filter(mentor => {
      const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesArea = areaOfInterest ? mentor.areas.includes(areaOfInterest) : true;
      return matchesSearch && matchesArea;
    });
    setFilteredMentors(filtered);
  }, [searchTerm, areaOfInterest, mentors]);

  return (
    <div className="max-w-5xl p-6 mx-auto">
      <h2 className="mb-6 text-2xl font-semibold md:text-4xl">Top Active Mentors</h2>
      <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between'>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Mentors..."
          className="w-full min-w-[360px] p-2 pl-10 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AiOutlineSearch className="absolute text-gray-500 top-3 right-3" size={20} />
      </div>
      
      <div className="mb-6">
        <select
          className="w-full p-2 border rounded "
          value={areaOfInterest}
          onChange={(e) => setAreaOfInterest(e.target.value)}
        >
          <option value="">Select Area of Interest</option>
          <option value="FMCG Sales">FMCG Sales</option>
          <option value="Equity Research">Equity Research</option>
          <option value="Digital Marketing">Digital Marketing</option>
          {/* Add more areas as needed */}
        </select>
      </div>
</div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))
        ) : (
          <p>No mentors found.</p>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
