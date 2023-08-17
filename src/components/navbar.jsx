import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        This is Navbar
<Link to="/">Home</Link>
<Link to="/add">ADD</Link>
<Link to="/post">POST</Link>
    </div>
  )
}

export default Navbar