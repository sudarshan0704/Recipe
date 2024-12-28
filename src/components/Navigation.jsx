import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
export default function () {
  return (
    <div className='nav'>
      <img src={logo} alt="Logo" />
      <h3>Tasty Corner</h3>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About Us</li></Link>
        <Link to='/dishes'><li>Recipe</li></Link>
        <Link to='/mycollection'><li>My collection</li></Link>
      </ul>
    </div>
  )
}
