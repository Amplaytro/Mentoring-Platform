import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Mentoring Platform</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/experts-select" className="nav-link">Experts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Attribute Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/expert" className="nav-link">Create Expert</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}