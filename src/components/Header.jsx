import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container mt-5">
        <h1>
          <Link to={"/"} className="text-light">
            CRUD - React, Redux, REST API & Axios
          </Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        to={"/products/create"}
      >
        Add new Product &#43;
      </Link>
    </nav>
  );
};

export default Header;
