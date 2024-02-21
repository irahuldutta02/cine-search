import { Link } from "react-router-dom";

const Navbar = ({ onThemeToggle, onSearch }) => {
  return (
    <nav className="bg-color1 p-4 fixed w-full flex justify-center items-center">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <img src="/assets/logo/icons8-movie-60.png" alt="CineSearch" />
            </div>
            <div className="hidden sm:inline-flex">
              <h1 className="text-white font-bold text-lg">CineSearch</h1>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center">
            <button
              className="text-white focus:outline-none"
              onClick={onThemeToggle}
              aria-label="Toggle Theme"
            >
              🌙
            </button>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search movies..."
              className="px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-color2"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
