import React, { useState } from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Brand from '../Brands/Brand'


const Nav = () => {

  const [open, setOpen]= useState(false)

  const openBrand = () => {

    setOpen(prevOpen => !prevOpen)
    
  }



  return (
    <div className='nav'>
      <div className='logo'>
          <img src='img/logo.webp' alt='logo'/>
      </div>
      <div className='nav-elements'>
        <Link className='link' to="" >HOME</Link>
        <span className='link' onClick={openBrand}>BAGS<RiArrowDropDownLine /></span>
        <span className='link' onClick={openBrand}>JEWELRY<RiArrowDropDownLine /></span>
        <span className='link' onClick={openBrand}>SHOES<RiArrowDropDownLine /></span>
        <span className='link' onClick={openBrand}>WATCHES<RiArrowDropDownLine /></span>
        <span className='link' onClick={openBrand}>PAGES<RiArrowDropDownLine /></span>
        <Link className='link' to="">CONTACT US</Link>
        <div className='icons'>
          <BiSearch />
          <div className='cart'>
            <AiOutlineShoppingCart/> <span>1</span>
          </div>
           
        </div>
      </div>
      <Brand open={open}/>
    </div>
  )
}

export default Nav