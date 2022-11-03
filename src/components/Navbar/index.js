import React from "react";
import logo from "../../assets/logorick.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <img className="ml-5 w-36" src={logo} alt="rick and morty logo" />
          <span className="ml-20 -mt-8 absolute font-semibold">Wiki</span>
        </Link>
        <div className="navbar-nav fs-5">
          <NavLink  className="px-2 uppercase text-sm" to="/about">
            About
          </NavLink>
          <NavLink to="/" className="px-2 uppercase text-sm">
            Characters
          </NavLink>
          <NavLink to="/episodes" className="px-2 uppercase text-sm">
            Episodes
          </NavLink>
          <NavLink  className="px-2 uppercase text-sm" to="/locations">
            Locations
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
