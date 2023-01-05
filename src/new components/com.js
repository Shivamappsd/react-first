import React, { Component } from "react";

export default class Header extends Component {
    render(){
        return (
<div className="container">
  <nav className="navbar navbar-expand-lg sticky-top shadow-sm ">
    <div className="container-fluid">
      <a className="navbar-brand text-danger fw-bold fs-2"> Shivam </a>
      <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon " />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#project">
              Project
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>


        );
    }
}
