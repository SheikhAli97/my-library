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
        <img src="src/assets/bx_bx-book-heart.png" />
        <img src="src/assets/material-symbols_format-list-numbered.png" />
        <img src="src/assets/mdi_tick-box-multiple-outline.png" />
      </div>
    </nav>
  )
}

export default Navbar
