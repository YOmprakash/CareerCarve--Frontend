import { useState } from 'react';

const MentorList = ({ onSelectMentor }) => {
  const [mentors] = useState([
    { id: 1, name: 'John Doe', areaOfExpertise: 'FMCG Sales', availability: '7pm - 9pm' },
    { id: 2, name: 'Jane Smith', areaOfExpertise: 'Equity Research', availability: '6pm - 8pm' },
  ]);

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Select a Mentor</h3>
      <ul className="space-y-2">
        {mentors.map(mentor => (
          <li key={mentor.id} className="bg-gray-100 p-4 rounded">
            <button 
              className="text-left w-full" 
              onClick={() => onSelectMentor(mentor)}
            >
              <strong>{mentor.name}</strong> - {mentor.areaOfExpertise} - {mentor.availability}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
