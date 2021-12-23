import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <li>
        <Link to="/">LCS</Link>
      </li>
      <li>
        <Link to="/lec">LEC</Link>
      </li>
      <li>
        <Link to="/lck">LCK</Link>
      </li>
      <li>
        <Link to="/lpl">LPL</Link>
      </li>
    </div>
  );
};

export default NavBar;
