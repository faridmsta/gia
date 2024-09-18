import React from 'react'
import './Clientpage.css'
import Exploresug from '../components/exploresug/Exploresug'
import Sections from '../components/sections/Sections'
import personalinfo from './../../components/img/undrawpersonalinfo.png'
import ProjectCarusel from './../components/projectCarusel/ProjectCarusel'
import { Link } from 'react-router-dom'


const lastProjects = [
    {
        heading: 'Need UI Designer for Redesign website',
        text: 'I need a UI Designer to revamp a website. Design should be responsive for both mobile, tablet, and computer.',
    },
    {
        heading: 'App mockup on figma',
        text: 'need to make a mockup for a project management application.the draft screen planning has been already done.',
    },
    {
        heading: 'iOS design of app with AR in Figma',
        text: 'Requirements- Human Interface Guidelines- iOS UI kit- Successful experience with iOS app design',
    },
]

function Clientpage() {
    return (
        <div>
            <section className='userinfo' >
                <div className="container">
                    <div className="userinfoWrap">
                        <div className="imagePrt infoPrt">
                            <div className="context">
                                <div className="image">
                                    <img src="https://t3.ftcdn.net/jpg/06/07/84/82/360_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg" alt="" />
                                </div>
                                <Link>Edit Profile</Link>
                            </div>
                        </div>
                        <div className="mainInfo infoPrt">
                            <h2>Rashid Isgandarov</h2>
                            <h3>Tech & IT</h3>
                            <p>United States - Seattle 9:10 AM</p>
                            <p>Member since Aug 2, 2022</p>
                        </div>
                        <div className="secondaryInfo infoPrt">
                            <ul>
                                <li>39 jobs posted</li>
                                <li>67% hire rate, 1 open job</li>
                                <li>$1.2K total spent</li>
                                <li>45 hires, 16 active</li>
                            </ul>
                        </div>
                        <div className="moreBtns infoPrt">
                            <button>Post a new project</button>
                            <button>Settings</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="projectCarusel">
                <div className="container">
                    <div className="projectCaruselWrap">
                        <ProjectCarusel header={'Last Shared Projects'} data={lastProjects} />
                    </div>
                </div>
            </div>
            <section className='buildcv'>
                <div className="container">
                    <div className="buildcvWrap">
                        <div className="left">
                            <h2>Build a strong CV</h2>
                            <p>Boost your business with this course on personal branding techniques.</p>
                        </div>
                        <div className="right">
                            <img src={personalinfo} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Exploresug />
            <Sections />
        </div>
    )
}

export default Clientpage