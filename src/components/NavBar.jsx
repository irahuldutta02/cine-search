import { Link } from "react-router-dom";
import { ThemeContext } from "../context/context";
import { useContext, useState } from "react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [showSearchModal, setShowSearchModal] = useState(false);

  function handleSetTheme() {
    if (darkMode) {
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
    } else {
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
    }
  }

  return (
    <nav className="bg-color1 text-color4 shadow-xl dark:bg-color4 dark:text-color1 fixed w-full flex justify-center items-center z-50">
      <div className="w-full p-4 max-w-7xl flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center">
                <img src="/assets/logo/icons8-movie-60.png" alt="CineSearch" />
              </div>
              <div className="hidden sm:inline-flex">
                <h1 className="font-bold text-lg">CineSearch</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="">
            <button
              className="text-xl bg-color4 text-color1 dark:bg-color1 dark:text-color4 rounded-md px-4 py-2"
              onClick={handleSetTheme}
            >
              {darkMode ? (
                <i className="fa-regular fa-sun"></i>
              ) : (
                <i className="fa-regular fa-moon"></i>
              )}
            </button>
          </div>
          <div className="flex items-center h-full justify-center relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="px-4 py-2 rounded-md h-full focus:outline-color2 bg-color4 text-color1 dark:bg-color1 dark:text-color4 outline-none w-48 md:w-96"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setShowSearchModal(true);
                } else {
                  setShowSearchModal(false);
                }
              }}
            />
            {showSearchModal && (
              <ul className="absolute top-14 bg-color4 border-2 border-color1 rounded-lg w-48 max-h-40 overflow-y-auto md:w-96 p-4 text-color1 flex justify-center items-start flex-col gap-2 dark:bg-color1 dark:text-color4 dark:border-color4">
                <li className="border-b border-color1 w-full py-2 dark:border-color4 cursor-pointer">
                  Hello there
                </li>
                <li className="border-b border-color1 w-full py-2 dark:border-color4 cursor-pointer">
                  Hello there
                </li>
                <li className="border-b border-color1 w-full py-2 dark:border-color4 cursor-pointer">
                  Hello there
                </li>
                <li className="border-b border-color1 w-full py-2 dark:border-color4 cursor-pointer">
                  Hello there
                </li>
                <li className="border-b border-color1 w-full py-2 dark:border-color4 cursor-pointer">
                  Hello there
                </li>
                <li className="border-b border-color1 w-full py-2 dark:border-color4 cursor-pointer">
                  Hello there
                </li>
                <li className="border-b border-color1 w-full py-2 dark:border-color4 cursor-pointer">
                  Hello there
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
