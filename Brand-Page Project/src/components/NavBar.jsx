import React from 'react'

const NavBar = () => {
  return (
    <nav className='container'>
    <div className='logo'>
      <img  src ="src\assets\brand_logo.png" alt='logo'/>
    </div>
    <ul>
      <li><a href="#"></a>Menu</li>
      <li><a href="#"></a>Location</li>
      <li><a href="#"></a>About</li>
      <li><a href="#"></a>Contact</li>
    </ul>
    <button className='login'>Login</button>
  </nav>
  )
}

export default NavBar