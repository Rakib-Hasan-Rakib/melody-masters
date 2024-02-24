import React, { useState } from "react";
import NavProfile from "./NavProfile";
import { Link, NavLink } from "react-router-dom";
import Headroom from "react-headroom";
import useAuth from "../../hooks/useAuth";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Container from "../../Components/Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const MenuItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instractors"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Instructors
        </NavLink>
      </li>
      <li className="block md:hidden">
        {user ? (
          <NavLink
            onClick={() => logOut()}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Login
          </NavLink>
        )}
      </li>
      <li
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        className="hidden md:block"
      >
        <NavProfile />
      </li>
      {isProfileMenuOpen && user && (
        <div className="bg-black opacity-90 z-50 flex flex-col absolute top-16 right-0 w-24 md:w-32 rounded-md space-y-1">
          <Link
            to="/dashboard"
            className="px-2 md:px-4 py-1 hover:text-green-500"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => logOut()}
            className="px-2 md:px-4 py-1 hover:text-green-500"
          >
            Logout
          </Link>
        </div>
      )}
      {isProfileMenuOpen && !user && (
        <div className="bg-black opacity-90 z-50 flex flex-col absolute top-16 right-0 w-24 md:w-32 rounded-md space-y-1">
          <Link
            to="/register"
            className="px-2 md:px-4 py-1 hover:text-green-400"
          >
            Register
          </Link>
          <Link to="/login" className="px-2 md:px-4 py-1 hover:text-green-400">
            Login
          </Link>
        </div>
      )}
    </>
  );
  return (
    <Headroom>
      <div className="w-full h-16 mb-12 z-10 navbar py-2 bg-black opacity-90 backdrop-blur-[5px] max-sm:px-8 text-white">
        <Container>
          <>
            <div className=" md:flex justify-between items-center">
              <div className="navbar flex justify-between items-center">
                <Link
                  to="/"
                  className="logo font-bold text-xl lg:text-2xl tracking-wider md:tracking-widest text-white flex items-center gap-4"
                >
                  <p>
                    <span className="text-2xl lg:text-4xl">M</span>elody
                    <span className="text-2xl lg:text-4xl">M</span>
                    asters
                  </p>
                  {/* <p className="font-bold heading text-lg md:text-xl lg:text-2xl">
                    Tourza
                  </p> */}
                </Link>
                <div className="dropdown z-50">
                  <label tabIndex={0} className="btn btn-ghost md:hidden">
                    {isMenuOpen && (
                      <Bars3Icon
                        onClick={() => setIsMenuOpen(false)}
                        className="h-6 w-6 text-white"
                      />
                    )}
                    {isMenuOpen || (
                      <Bars3Icon
                        onClick={() => setIsMenuOpen(true)}
                        className="h-6 w-6 text-white"
                      />
                    )}
                  </label>

                  <ul
                    className={`menu menu-sm z-50 dropdown-content flex items-center gap-2 rounded-box bg-black text-black ${
                      isMenuOpen
                        ? "absolute flex flex-col right-1 p-8"
                        : "hidden"
                    }`}
                  >
                    {MenuItem}
                  </ul>
                </div>
              </div>
              <div className="navbar-center hidden md:block">
                <ul className="menu menu-horizontal px-1 flex justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
                  {MenuItem}
                </ul>
              </div>
            </div>
          </>
        </Container>
      </div>
    </Headroom>
  );
};

export default Navbar;
