import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <div className="container navbar">
        <div className="navbar-start">
          <Logo></Logo>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1 md:flex md:gap-10 lg:gap-16">
            <li className="">
              <a
                href="#"
                className="lg:text-lg border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
              >
                Orders
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="lg:text-lg border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
              >
                Foods
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="lg:text-lg border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
              >
                Tables
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="lg:text-lg border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow-md"
            >
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
                >
                  Orders
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
                >
                  Foods
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
                >
                  Tables
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
