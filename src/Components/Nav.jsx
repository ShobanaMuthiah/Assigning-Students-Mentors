import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
<nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <Link className="navbar-brand glow active" to='/'>Student Mentor Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-link active " aria-current="page" to='/'>Home</Link>
      <Link className="nav-link active" aria-current="page" to='/getMentor'>Mentor Details</Link>
      <Link className="nav-link active" aria-current="page" to='/getStudent'>Student Details</Link>


      </div>
    </div>
  </div>
</nav>
</div>

    );
};

export default Nav;