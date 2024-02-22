import { useContext } from "react";
import { SearchTermContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ status, message }) => {
  const { setSearchTerm } = useContext(SearchTermContext);
  const navigate = useNavigate();

  function handleClick() {
    if (message === "Too many results.") {
      setSearchTerm("Harry Potter");
    }
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="w-full max-w-7xl flex justify-center items-center flex-col gap-6">
        <div className="flex justify-center items-center max-w-96">
          {status === "404" && (
            <img src="/assets/images/404-not-found.png" alt="error" />
          )}
        </div>
        <h1 className="text-3xl text-center">{message}</h1>
        <div className="flex justify-center items-center text-center">
          <button
            className="bg-color1 text-color4 dark:bg-color4 dark:text-color1 px-4 py-2 rounded-md"
            onClick={handleClick}
          >
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
