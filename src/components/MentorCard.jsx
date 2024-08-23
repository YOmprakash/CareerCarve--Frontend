import { useState } from "react";
import { FaUniversity, FaBriefcase, FaArrowRight } from "react-icons/fa";
import BookingForm from "./BookingFrom";

const MentorCard = ({ mentor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const initial = mentor.name.charAt(0).toUpperCase();
  return (
    <div className="relative flex p-4 bg-white border rounded shadow-lg">
      <div className="flex items-center  justify-center w-20 h-20 text-2xl font-semibold text-white rounded-full bg-[#1C8EA8]">
        {initial}
      </div>
      <div className="px-2 ml-4">
        <h3 className="mt-4 text-xl font-semibold text-[#333333]">
          {mentor.name}
        </h3>
        <p className="mt-1 font-normal text-gray-500">
          Number of Sessions ({mentor.sessionsTaken})
        </p>
        <div className="flex items-center justify-between w-full gap-8 mt-2">
          <p className="flex items-center text-sm font-normal text-gray-500">
            <FaUniversity className="mr-2" /> {mentor.university}
          </p>
          <p className="flex items-center text-sm font-normal text-gray-500">
            <FaBriefcase className="mr-2" /> {mentor.currentJob}
          </p>
        </div>
        <p className="p-1 mt-2 text-gray-600 ">{mentor.areas.join(",")}</p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-600">Ratings: {mentor.ratings} ⭐</p>
          <button
            onClick={openModal}
            className="flex items-center justify-center px-4 py-2 font-semibold text-white rounded bg-[#1C8EA8]"
          >
            Book now
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="relative w-11/12 p-8 bg-white rounded shadow-lg md:w-1/3">
            <button
              onClick={closeModal}
              className="absolute text-2xl text-gray-500 top-3 right-3 hover:text-gray-700"
              aria-label="Close"
            >
              &times;
            </button>
            <BookingForm selectedMentor={mentor} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorCard;
