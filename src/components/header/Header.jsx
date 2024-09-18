import React from 'react'
import logo from '../img/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

function Header() {
  return (
    <header className='mainHeader'>
      <div className="container">
        <div className="mainHeaderWrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/searchcat'><CiSearch /></Link>
              </li>
              <li>
                <Link><IoIosNotificationsOutline/></Link>
              </li>
              <li>
                <Link><CiMail/></Link>
              </li>
              <li>
                <Link><CiHeart /></Link>
              </li>
              <li>
                <Link to='/profile'><img src="https://t3.ftcdn.net/jpg/06/07/84/82/360_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg" alt="" /></Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header