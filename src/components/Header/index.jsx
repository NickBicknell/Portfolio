import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar d-blue pb-1 navbar-expand-lg" data-bs-theme="dark">
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
    // <Navbar expand="lg">
    //   <Container className="mb-5 nav">
    //     <Link className="text-decoration-none" to="/">
    //       <Navbar.Brand className="fs-1 text-white ps-3">
    //         Just Jackets
    //       </Navbar.Brand>
    //     </Link>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //       <Nav>
    //         <Row>
    //             <>
    //               <Col>
    //                 <Link className="btn fs-5" to="/me">
    //                   Profile
    //                 </Link>
    //               </Col>
    //               <Col>
    //                 <button className="btn fs-5" onClick={logout}>
    //                   Logout
    //                 </button>
    //               </Col>
    //             </>
    //             <>
    //               <Col>
    //                 <Link className="btn fs-5" to="/login">
    //                   Login
    //                 </Link>
    //               </Col>
    //               <Col>
    //                 <Link className="btn fs-5" to="/signup">
    //                   Signup
    //                 </Link>
    //               </Col>
    //             </>
    //         </Row>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Header;
