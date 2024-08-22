import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-10 px-2 md:px-16 bg-white border-b border-[#dadce0] shadow-lg shadow-gray-300/50">
      <div className="container flex items-center justify-between p-4 mx-auto">

        <div className="text-2xl font-bold">
          <Link to="/">
            <img src='https://www.careercarve.com/Career_Carve_Logo__1_-removebg-preview%202.png' alt='logo' className='object-contain w-40 h-auto' />
          </Link>
        </div>

        {/* Menu items for larger screens */}
        <nav className="hidden space-x-8 md:flex">
          <Link to="/book" className="text-lg font-medium text-gray-700 hover:text-blue-500">
            Mentors
          </Link>
          <Link to="/booking" className="text-lg font-medium text-gray-700 hover:text-blue-500">
            Booking
          </Link>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="flex flex-col items-center justify-center py-4 space-y-4 md:hidden">
          <Link
            to="/mentors"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-blue-500"
          >
            Mentors
          </Link>
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-blue-500"
          >
            Booking
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
