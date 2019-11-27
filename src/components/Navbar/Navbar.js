import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";

import Routes from "../../Routes";
import Error from "../../pages/Error/Error";
import "./Navbar.css";

const Navbar = () => {
  return (
    <HashRouter>
      <>
        <nav className="navbar">
          <NavLink className="logo" to="/">
            <img
              className="logo-img"
              src="images/marvel.png"
              alt="Marvel Logo"
            />
          </NavLink>
        </nav>

        <div className="main-container">
          {Routes.map(({ path, exact, main }, index) => (
            <Route key={index} path={path} exact={exact} component={main} />
          ))}
          <Route component={Error} />
        </div>
      </>
    </HashRouter>
  );
};

export default Navbar;
