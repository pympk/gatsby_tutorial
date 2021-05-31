import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <h2>++ Navbar ++</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
