import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Accueil
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${isNavOpen ? " show" : ""}`}
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isNavOpen}
                  onClick={toggleNav}
                >
                  Menu
                </Link>
                <ul
                  className={`dropdown-menu${isNavOpen ? " show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/mychart"
                      onClick={closeNav}
                    >
                      Population Forecast by Country
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/mychart1"
                      onClick={closeNav}
                    >
                      Land area of countries
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/mychart2"
                      onClick={closeNav}
                    >
                      Percentage of the world population analyzed
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/mychart3"
                      onClick={closeNav}
                    >
                      Comparison of population density and land area by country
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/mychart4"
                      onClick={closeNav}
                    >
                      Growth rate by country
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
