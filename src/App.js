import { useCallback, useState } from "react";
import "./App.css";
import Nav from "./component/nav";
import { ThemeContext } from "./context/themeContext";
// import Age from "./component/age";
import ApiUser from "./component/posts";
// import Counter from "./component/counter";
import Todos from "./component/todos";

function App() {
  const [themeToggle, setThemeToggle] = useState(true);

  const handleThemeChange = useCallback(
    (themeValue) => {
      setThemeToggle(!themeValue);
    },
    [themeToggle]
  );

  return (
    <ThemeContext.Provider value={themeToggle ? "light" : "dark"}>
      <div className="app-container ">
        <Nav themeChange={handleThemeChange} />

        {/* <Todos /> */}

        {/* <Counter /> */}
        <ApiUser />
        {/* <Age /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
