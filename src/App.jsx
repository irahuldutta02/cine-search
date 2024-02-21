import { useState } from "react";
import { Page } from "./Page";
import { ThemeContext } from "./context/context";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Page />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
