import React from 'react';
import 'animate.css'; 


function Nav() {

  return (
    <nav className="navbar d-blue pb-5" data-bs-theme="dark">
      <div className="container-fluid">
          <h1 className='text-white display-2 ms-3'>Nicholas Bicknell</h1>
        <ul className="d-flex flex-row align-items-center list-unstyled flex-wrap">
        <li className="nav-item">
          <a className="nav-item btn mx-4 fs-2" href='/'>About Me</a>
        </li>
        <li className="nav-item text-white fs-1">|</li>
        <li className="nav-item">
          <a className="nav-item btn mx-4 fs-2" href='/portfolio'>Portfolio</a>
        </li>
        <li className="nav-item text-white fs-1 seperator">|</li>
        <li className="nav-item">
          <a className="nav-item btn mx-4 fs-2" href='/contact'>Contact</a>
        </li>
        <li className="nav-item text-white fs-1">|</li>
        <li className="nav-item">
          <a className="nav-item btn mx-4 fs-2" href='./resume.pdf'>Resume</a>
        </li>
      </ul>
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
