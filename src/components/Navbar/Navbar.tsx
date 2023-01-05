import React from "react"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src="src/assets/My Library.png"></img>
      <input
        type="text"
        placeholder="Search for any of our books..."
        className="input"
      />

      <div className="icons">
        <button>
          <span>Favourites</span>
        </button>
        <button>
          <span>Books ive read</span>
        </button>

        <button>
          <span>Reading list</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
