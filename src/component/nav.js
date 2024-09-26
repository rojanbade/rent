import React, { useContext, useState } from "react";
import "../css/nav.css";
import { ThemeContext } from "../context/themeContext";
import logo from "../image/logo.png";
import dark from "../image/dark.png";
import light from "../image/light.png";

const Nav = ({ themeChange }) => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);

  const handleThemeChange = () => {
    setToggle(!toggle);
    themeChange(toggle);
  };

  return (
    <div className={`nav-container-${theme} nav`}>
      <img src={logo} alt="logo" width="50" height="50" />
      <ul>
        <li>Home</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>About us</li>
      </ul>
      <div onClick={handleThemeChange} className="icons">
        {toggle ? (
          <img src={light} alt="logo" width="30" height="30" />
        ) : (
          <img src={dark} alt="logo" width="30" height="30" />
        )}
      </div>
    </div>
  );
};

export default Nav;
