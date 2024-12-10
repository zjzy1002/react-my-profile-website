import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="buttons is-centered">
        {/* Home Button */}
        <button className="button is-warning">
          <Link to="/">Home</Link>
        </button>
        {/* Contact Button */}
        <button className="button is-primary">
          <Link to="/contact">Contact</Link>
        </button>
        {/* Projects button */}
        <button className="button is-success">
          <Link to="/projects">Projects</Link>
        </button>
      </div>
      <br />
    </div>
  );
}

export default Nav;
