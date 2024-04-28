import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const number = useSelector(state=>state.cart.products.length)
  return (
    <div className='Navbar'>
      <div className="wrapper">
        <div className='left'>
          <div className="item">
            <img src='/img/en.png' alt='nation'></img>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link to="/products/1" className='link'>Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2" className='link'>Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className='link'>Children</Link>
          </div>
        </div>
        <div className='center'>
          <Link to="/" className='link'>LAMASHOP</Link>
        </div>
        <div className='right'>
          <div className="item">
            <Link to="/products/3" className='link'>Homepage</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className='link'>About</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className='link'>Contacts</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className='link'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={()=>{setOpen(!open)}}>
              <ShoppingCartOutlinedIcon/>
              <span>{number}</span>
            </div>
          </div>
        </div>
      </div>
      {open&&<Cart/>}
    </div>
  )
}

export default Navbar