import React, { useState } from 'react'
import './Signin.css'
import AuthHeader from '../components/authheader/AuthHeader'
import lodingdraw from './../components/img/undraw_login.png'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import { CgPassword } from 'react-icons/cg'
import toast from 'react-hot-toast';

function Signin() {

    const [signinData, setSigninData] = useState(
        {
            email: "",
            password: '',
        }
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!signinData.email || !signinData.password) {
            toast.error("Please fill out all fields.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(signinData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
    
        try {
            console.log("Submitting signin form with data: ", signinData);
    
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
    
            toast.success("Signin successful!");
            
            setSigninData({
                email: '',
                password: '',
            });
    
    
        } catch (error) {
            toast.error("Signin failed. Please try again.");
            console.error("Signin error:", error);
        }
    };
    

    return (
        <div>
            <AuthHeader />
            <section className='signinsecWrap'>
                <div className="container">
                    <div className="signinsecAll">
                        <div className="signinsec">
                            <div className="signinsecimg">
                                <img src={lodingdraw} alt="loading" />
                            </div>

                            <div className="formSec">
                                <h2>Sign in</h2>
                                <form action="">
                                    <div className="inpBox">
                                        <input type="email" placeholder='Email Address *'
                                            value={signinData.email}
                                            onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="inpBox">
                                        <input type="password" placeholder='Password *'
                                            value={signinData.password}
                                            onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
                                        />
                                    </div>
                                    <div className="feedAndLog">
                                        <Link>Forgot your password?</Link>
                                        <button onClick={handleSubmit} type='submit'>
                                            <span>Login</span>
                                            <GoArrowRight size={20} />
                                        </button>
                                    </div>
                                </form>
                                <Link to='/signup' >Create New Account</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin