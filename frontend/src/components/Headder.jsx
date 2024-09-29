import React from "react";
import "./Headder.css";
function Headder() {
  return (
    <nav className="navbar  headder sticky-top">
      <h3>Fun In Science.</h3>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">
        &#9776;
      </label>
      <ul className="menu footerlist">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Headder;
