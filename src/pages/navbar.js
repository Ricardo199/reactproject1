import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/game">tic-tac-toe</Link>
      </li>
      <li>
        <Link to="/extrastuff1">Extra Stuff</Link>
      </li>
      <li>
        <Link to="/extrastuff2">Extra Stuff the sequel</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
}
export default Navbar;