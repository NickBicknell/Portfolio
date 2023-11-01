import React from "react";
import "animate.css";

function Nav() {
  return (
    <nav className="navbar d-blue pb-5 navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <h1 className="text-white ms-3 display-2">Nicholas Bicknell</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav d-flex flex-row align-items-center justify-content-evenly list-unstyled flex-wrap">
          <li className="nav-item">
            <a className="nav-item btn mx-4 nav-link text-white" href="/">
              About Me
            </a>
          </li>
          <li className="nav-item text-white fs-1">|</li>
          <li className="nav-item">
            <a className="nav-item btn mx-4 nav-link text-white" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item text-white fs-1">|</li>
          <li className="nav-item">
            <a className="nav-item btn mx-4 nav-link text-white" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item text-white fs-1">|</li>
          <li className="nav-item">
            <a className="nav-item btn mx-4 nav-link text-white" href="./resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>

    // <nav className="nav">
    //   <a href="/" className="site-title">Nicholas Bicknell</a>
    //   <ul>
    //     <li>
    //       <a href="/about">About Me</a>
    //     </li>
    //     <li>
    //       <a href="/portfolio">Portfolio</a>
    //     </li>
    //     <li>
    //       <a href="/contact">Contact</a>
    //     </li>
    //     <li>
    //       <a href="/resume">Resume</a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Nav;
