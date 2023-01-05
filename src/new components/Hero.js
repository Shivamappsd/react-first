import React, { Component } from "react";


export default class Hero extends Component {
    render() {
        return (
            <div className="container-lg">
                <div className="row  min-vh-100 align-item-center align-content-center">
                    <div className="col-md-4 mt-5 mt-md-0">
                        {/* <div className="home-img text-center">
                            <img
                                src={ className="rounded-circle mw-100"
                                alt="Home-img"/>
                        </div> */}
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0 order-md-first">
                        <div className="home-text">
                            <p className="text-muted mb-1">This is </p>
                            <br />
                            <h1 className="mhding text-danger text-uppercase fs-1 fw-bold">
                                Shivam Panwar
                            </h1>
                            <h2 className="bdevloper fs-4">Backend Developer</h2>
                            <p className="mt-4 text-muted">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quas{" "}
                            </p>
                            <a href="#portfolio" className="btn btn-danger px-3 mt-3">
                                My Work
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>

        );
    }
}