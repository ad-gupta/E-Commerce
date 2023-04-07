import React, { useEffect, useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let x = 0;
  const [cartItemCount, setcartItemCount] = useState(x)
  useEffect(()=> {
    getCart();
  })

  const getCart = async () => {
    let result = await fetch('https://xyz-rqcm.onrender.com/cart');
    result = await result.json()
    setcartItemCount(result.length)
  }

  return (
    <header>
      <nav className='navbar'>
        <div className="left">
            <div className="navlogo">
                <img className="amazonlogo" src="./amazonLogo.jpg" alt="Amazon Logo" />
            </div>
            <div className="navSearchBar">
                <input className='searchIP' type="text" placeholder='Search here'/>
                <div className="searchBtn">
                    <SearchIcon/>
                </div>

            </div>
        </div>

        <div className="right">
            <Link className='signIn' to='/signIn'>Sign-In</Link>
            <Link className='signIn' to='/cart'>
                <Badge badgeContent={cartItemCount} color="primary" className='badge'>
                    <ShoppingCartIcon id="icon" style={{color: "white"}}/>
                </Badge>
            </Link>
            <Link to='/profile' className="avtar">
                <Avatar/>
            </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
