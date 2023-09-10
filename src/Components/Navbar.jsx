import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {

  const linkStyle = {
    color: 'white',
    fontWeight: '600',
    textDecoration: 'none', 
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar " style={{borderBottom: '3px solid #808080' }}>
      <div className='container'>
      <a className="navbar-brand" href="#" style={{color:'white', fontWeight:'600'}}><h3>TamilNadu Tourism</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
           <Link to ="/" style={linkStyle}> <a className="nav-link"  style={{color:'white', fontWeight:'600'}}>Home </a></Link>
          </li>
          <li className="nav-item">
          <Link to ="/PlacetoVisit" style={linkStyle}><a className="nav-link"  style={{color:'white', fontWeight:'600'}}>Places To Visit</a></Link>
          </li>
          <li className="nav-item">
          <Link to ="/Besttimevisit" style={linkStyle}><a className="nav-link" href="#"  style={{color:'white', fontWeight:'600'}}>Best Time To Visit</a></Link>
          </li>
          <li className="nav-item">
          <Link to ="/Package" style={linkStyle}><a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Packages</a></Link>
          </li>
          
          <li className="nav-item">
          <Link to ="/Food" style={linkStyle}><a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Food</a></Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
