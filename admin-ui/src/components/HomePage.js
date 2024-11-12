import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <Link to="/biscuits">
        <button className="nav-button">Go to Biscuits</button>
      </Link>
      <Link to="/chocolates">
        <button className="nav-button">Go to Chocolates</button>
      </Link>
    </div>
  );
}

export default HomePage;
