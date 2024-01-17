import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
// import About from "./About";

export default function Navbar() {
  return (
    <div className="body"> 
      <div className="header">
          <nav className="navigation" >
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="#">Service</Link>
              <Link to="/contact">Contact</Link>
          </nav>
          <div className="Elegance">
              <h1>Elegance Essence</h1>
              <p className="slogan">Where Self-Care Meets Elegance</p>
              <button className="learn">Lean More</button>
          </div>
      </div>
    </div>
  )
}

