import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#252525] shadow-lg sticky z-50 top-0 rounded-3xl px-6 py-3 ">
      <nav className="bg-[#252525] border-white px-4 mt-3 mb-3 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 bg-[#252525] h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white hover:bg-gray-200 hover:text-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-50"
                    } border-b border-gray-100 ease-in-out delay-300 hover:bg-gray-50 md:border-none sm:border-none lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 hover:rounded-2xl`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-50"
                    } border-b border-gray-100 ease-in-out delay-300 hover:bg-gray-50 md:border-none sm:border-none lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 hover:rounded-2xl`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-50"
                    } border-b border-gray-100 ease-in-out delay-300 hover:bg-gray-50 md:border-none sm:border-none lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 hover:rounded-2xl`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-50"
                    } border-b border-gray-100 ease-in-out delay-300 hover:bg-gray-50 md:border-none sm:border-none lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 hover:rounded-2xl`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
