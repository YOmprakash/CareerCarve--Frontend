import { useEffect, useState } from 'react';
import axios from 'axios';
import MentorCard from '../components/MentorCard';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon

const areasOfInterest = [
  { id: 1, name: "FMCG Sales" },
  { id: 2, name: "E-Commerce" },
  { id: 3, name: "Equity Research" },
  { id: 4, name: "Investment Banking" },
  { id: 5, name: "Digital Marketing" },
  { id: 6, name: "Product Management" },
  { id: 7, name: "Management Consulting" },
  { id: 8, name: "Brand Management" },
  { id: 9, name: "Operations Management" },
  { id: 10, name: "Finance" },
  { id: 11, name: "Business Development" },
  { id: 12, name: "Technology Consulting" },
  { id: 13, name: "Corporate Communications" },
  { id: 14, name: "Retail Management" },
  { id: 15, name: "Innovation Management" },
  { id: 16, name: "Sustainability" },
  { id: 17, name: "Marketing Strategy" },
  { id: 18, name: "Corporate Finance" },
  { id: 19, name: "Strategy Consulting" },
  { id: 20, name: "Leadership" }
];

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
    <div className="pt-12 px-4 bg-white md:px-[92px] mx-auto">
      <h2 className="mb-6 text-2xl font-semibold md:text-4xl">Top Active Mentors</h2>
      <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between'>
      <div className=" flex justify-between px-4  items-center w-full max-w-[360px] p-2 border rounded mb-6 font-normal">
        <input
          type="text"
          placeholder="Search Mentors..."
          className='border-none outline-none '
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AiOutlineSearch className="text-[#1C8EA8] " size={20} />
      </div>
      
      <div className="mb-6">
  <select
    className="w-full p-2 border rounded"
    value={areaOfInterest}
    onChange={(e) => setAreaOfInterest(e.target.value)}
  >
    <option value="">Select Role</option>
    {areasOfInterest.map((role) => (
      <option key={role.id} value={role.name}>
        {role.name}
      </option>
    ))}
  </select>
</div>

</div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
