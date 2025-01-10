import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="app">
    <nav className="navbar">
      <div className="nav-brand">CarHub</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/pages/about">About</Link></li>
        <li><Link href="/pages/contact">Contact</Link></li>
      </ul>
    </nav>
  
  </div>
  )
}

export default Navbar
