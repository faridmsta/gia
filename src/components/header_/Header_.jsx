import React from 'react'
import './Header_.css'
import logo from '../../components/img/logo.png'
import { Link } from 'react-router-dom'


function Header_() {
  return (
    <header className='landingHeaderWrap'>
        <div className="container">
          <div className="landingHeader">
            <div className="up">
              <Link>How it works</Link>
              <Link className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <Link>Browse jobs</Link>
            </div>
            <div className="down">
              <div className="menu">
                <nav>
                  <ul>
                    <li>
                      <Link>Get Jobs</Link>
                    </li>
                    <li>
                      <Link>Hire Freelancer</Link>
                    </li>
                    <li>
                      <Link>Make CV with AI</Link>
                    </li>
                    <li>
                      <a href="#aboutus" >About Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="authBtns">
                <Link to='/signin'>Log in</Link>
                <Link to='/signup' >Join Us</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header_