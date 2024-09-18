import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './Signup.css'
import AuthHeader from '../components/authheader/AuthHeader'
import signupdraw from '../components/img/undrawcna.png'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

function Signup({ isfreelance }) {

    const [newuserData, setNewuserData] = useState({
        fName: '',
        lName: '',
        email: '',
        companyName: '',
        password: '',
        country: '',
        phone: '',
        timeZome: '',
        isfreelance: isfreelance,

    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic input validation
        if (!newuserData.fName || !newuserData.lName || !newuserData.email || !newuserData.password || !newuserData.companyName || !newuserData.country || !newuserData.phone || !newuserData.timeZome) {
            toast.error("Please fill out all fields.");
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newuserData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Password strength validation (example: at least 8 characters)
        if (newuserData.password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }

        try {
            // Simulate form submission
            console.log("Submitting signup form with data: ", newuserData);

            // Mock API call (replace this with actual API request)
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

            toast.success("Signup successful!");

            // Clear form fields after submission
            setNewuserData({
                fName: '',
                lName: '',
                email: '',
                companyName: '',
                password: '',
                country: '',
                phone: '',
                timeZome: '',
                isfreelance: isfreelance,
            });

        } catch (error) {
            // Handle submission error
            toast.error("Signup failed. Please try again.");
            console.error("Signup error:", error);
        }
    };



    const [countData, setCountData] = useState([])
    const [timezoneData, setTimezoneData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(res => setCountData(res))
            .catch(error => {
                setCountData([]);
            });
    }, [])

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/EmadAdly/c32181b987937f15214615ad4c6a6024/raw/82e2ca0cb5892dca6d81362c991f6b8c62861720/timezone.json')
            .then(response => response.json())
            .then(res => setTimezoneData(res))
            .catch(error => {
                setTimezoneData([]);
            });
    }, [])

    const countryOptions = countData.map((item) => ({
        value: item.name.common,
        label: (
            <div className="country-option">
                <img src={item.flags.png} alt="" style={{ width: '20px', marginRight: '10px' }} />
                {item.name.common}
            </div>
        )
    }))

    const seenGMT = new Set();

    const timeOptions = timezoneData
        .filter((item) => {
            if (seenGMT.has(item.gmt)) {
                return false; // Skip if GMT already seen
            } else {
                seenGMT.add(item.gmt);
                return true; // Include if GMT not seen
            }
        })
        .map((item) => ({
            value: item.gmt,
            label: (
                <div className="time-option">
                    {item.gmt}
                </div>
            )
        }));



    return (
        <div>
            <AuthHeader />
            <section className='signupsecWrap'>
                <div className="container">
                    <div className="signupsecAll">
                        <div className="signupsec">
                            <div className="signupsecimg">
                                <img src={signupdraw} alt="loading" />
                            </div>

                            <div className="formSec">
                                <h2>Sign up to Gia</h2>
                                <form action="">
                                    <div className="line">
                                        <div className="inpBoxHalf">
                                            <input type="text" placeholder='First name'
                                                value={newuserData.fName}
                                                onChange={(e) => setNewuserData({ ...newuserData, fName: e.target.value })}
                                            />
                                        </div>
                                        <div className="inpBoxHalf">
                                            <input type="text" placeholder='Last name'
                                                value={newuserData.lName}
                                                onChange={(e) => setNewuserData({ ...newuserData, lName: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="inpBox">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id='email' placeholder='dev@domain.com'
                                            value={newuserData.email}
                                            onChange={(e) => setNewuserData({ ...newuserData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="inpBox">
                                        <label htmlFor="pass">Password</label>
                                        <input type="password" id='pass' placeholder='********'
                                            value={newuserData.password}
                                            onChange={(e) => setNewuserData({ ...newuserData, password: e.target.value })}
                                        />
                                    </div>
                                    <div className="inpBox">
                                        <label htmlFor="company">Company name</label>
                                        <input type="text" id='company' placeholder='Socialhub'
                                            value={newuserData.companyName}
                                            onChange={(e) => setNewuserData({ ...newuserData, companyName: e.target.value })}
                                        />
                                    </div>
                                    <div className="line">
                                        <div className="inpBoxHalfCtn">
                                            <label htmlFor="countries">Country</label>
                                            <Select
                                                options={countryOptions}
                                                name="cnt"
                                                id="countries"
                                                className="country-select"
                                                value={countryOptions.find(option => option.value === newuserData.country)}
                                                onChange={(selectedOption) => setNewuserData({ ...newuserData, country: selectedOption.value })}
                                            />
                                        </div>
                                        <div className="inpBoxHalf">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="phone" placeholder='+123'
                                                value={newuserData.phone}
                                                onChange={(e) => setNewuserData({ ...newuserData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="inpBoxtime">
                                        <label htmlFor="countries">Default timezone</label>
                                        <Select
                                            options={timeOptions}
                                            name="time"
                                            id="timezones"
                                            className="time-option"
                                            value={timeOptions.find(option => option.value === newuserData.timeZome)}
                                            onChange={(selectedOption) => setNewuserData({ ...newuserData, timeZome: selectedOption.value })}
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='signupBtn'
                                        onClick={handleSubmit}
                                    >
                                        Sign up
                                    </button>
                                </form>
                                <Link className='backlogBtn' to='/signin' >Back to login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
