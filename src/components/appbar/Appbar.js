import React from 'react';
import { Link } from 'react-router-dom';


export default function Appbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src="./images/logo.png" alt="logo" width="50px" />
          <div>
          <button type="button" className="btn btn-light">
              <Link to="/">Home</Link>
          </button>
          <button type="button" className="btn btn-light">
              <Link to="/about">About</Link>
          </button>
          <button type="button" className="btn btn-light">
              <Link to="/contact">Contact</Link>
          </button>
          </div>
        </div>
    </nav>
  
  );
}
