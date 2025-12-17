import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='w-2xl h-1 border-2 bg-emerald-500'>
      <Link to='/'>Home</Link>
      <Link to='/Menu'>Menu</Link>
      <Link to='/Food'>Food</Link>
      <Link to='/Contact'>Contact</Link>
    </div>
  )
}

export default Header