import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigationBar() {
        if (Auth.loggedIn()) {

    return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping cart"> Cart</span> SHOP </Link>
          </h1>

      <nav>
        {showNavigationBar()}
      </nav>
    </header>
  );
}

export default Nav;

