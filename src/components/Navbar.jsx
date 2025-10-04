import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <Container>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Chnagelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>              
            </ul>
          </div>
          <a className="text-lg md:text-2xl font-semibold text-black ">CS — Ticket System</a>
        </div>
        
        <div className="navbar-end">
            <ul className=" md:flex gap-8 text-sm hidden ">
                <li><a href="#">Home</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          <button className=" btn ml-10 items-center bg-linear-[125deg] from-[#632EE3] from-5% to-[#9F62F2] to-85% text-white">+ New Ticket</button>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
