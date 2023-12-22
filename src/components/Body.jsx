import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import MyMoviesCard from "./MyMoviesCard";

class Body extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 text-white">TV Shows</h2>
            <Dropdown style={{ backgroundColor: "#221f1f", borderRadius: "10px" }}>
              <Dropdown.Toggle
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0 m-2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f", borderRadius: "10px" }}
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: "#221f1f", borderRadius: "10px" }}>
                <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
                  Drama
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="fa fa-th-large icons" />
            <i className="fa fa-th icons" />
          </div>
        </div>
        <h4 className="mt-3 text-left text-white">Trending Now Comedy</h4>
        <MyMoviesCard title={"this"} />
        <h4 className=" text-left text-white">Watch it Again Harry Potter</h4>
        <MyMoviesCard title={"harry potter"} />
        <h4 className=" text-left text-white">Because you watched The Ranch</h4>
        <MyMoviesCard title={"ranch"} />
        <h4 className=" text-left text-white">Titles you can't miss</h4>
        <MyMoviesCard title={"coach"} />
        <h4 className=" text-left text-white">If you feel Melancholic</h4>
        <MyMoviesCard title={"old"} />
      </div>
    );
  }
}

export default Body;
