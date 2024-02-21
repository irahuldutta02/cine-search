import { useEffect, useState } from "react";
import { Page } from "./Page";
import { ThemeContext } from "./context/context";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode === "false") {
      setDarkMode(false);
    }

    if (isDarkMode === "true") {
      setDarkMode(true);
    }

    if (isDarkMode === null) {
      localStorage.setItem("darkMode", true);
    }
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Page />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
