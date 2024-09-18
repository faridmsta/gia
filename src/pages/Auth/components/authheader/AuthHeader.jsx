import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../../../components/img/logo.png'
import './AuthHeader.css'
import { CiSearch } from "react-icons/ci";

function AuthHeader() {
    return (
        <header className='singinHeaderWrap' >
            <div className="container">
                <div className="singinHeader">
                    <Link to='/' className="logo">
                        <img src={Logo} alt="" />
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link>Find Job</Link>
                            </li>
                            <li>
                                <Link>Trainings</Link>
                            </li>
                            <li>
                                <Link>Make CV with AI</Link>
                            </li>
                            <li>
                                <Link>About Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <div className="searhCirc">
                            <CiSearch size={20} />
                        </div>
                        <Link to='/signin'>
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AuthHeader