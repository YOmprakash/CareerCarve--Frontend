import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center min-h-screen px-4 text-gray-900 bg-white md:px-16 md:flex-row">
      {/* Left Side Content */}
      <div className="flex flex-col items-center w-full p-4 text-center md:w-1/2 md:items-start md:text-left md:p-12">
        <h1 className="text-3xl md:text-4xl text-[#1C8EA8] font-bold mb-8">Welcome to CareerCarve 1x1 Scheduler</h1>
        <h2 className="mb-2 text-lg font-normal md:text-2xl">From resume to final interview preparation</h2>
        <Link to="/book">
          <button className="py-3 px-12 mt-8 text-black uppercase transition duration-200 bg-[#F5A536] font-semibold rounded-lg hover:bg-[#FFB44B]">
            Book 1x1
          </button>
        </Link>
      </div>
      
      {/* Right Side Image */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img
          src="https://ccicons.s3.amazonaws.com/landing_page/LandingPageImg_1.webp"
          alt="Landing"
          className="object-contain w-full h-auto max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Home;
