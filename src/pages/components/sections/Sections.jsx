import React from 'react'
import './Sections.css'
import { Link } from 'react-router-dom'


function Sections() {
    return (
        <section className="sectionsFoot">
            <div className="container">
                <div className="sectionsFootWrap">
                    <div className="line">
                        <h2>Categories</h2>
                        <nav>
                            <ul>
                                <li>
                                    <Link>Design</Link>
                                </li>
                                <li>
                                    <Link>Programming</Link>
                                </li>
                                <li>
                                    <Link>Business</Link>
                                </li>
                                <li>
                                    <Link>Data&Science</Link>
                                </li>
                                <li>
                                    <Link>Video&Animation</Link>
                                </li>
                                <li>
                                    <Link>Lifestyles</Link>
                                </li>
                                <li>
                                    <Link>Business</Link>
                                </li>
                                <li>
                                    <Link>Marketing</Link>
                                </li>
                                <li>
                                    <Link>Music&Audio</Link>
                                </li>
                                <li>
                                    <Link>Writing&Translation</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="line">
                        <h2>Trainings</h2>
                        <nav>
                            <ul>
                                <li>
                                    <Link>Trainings</Link>
                                </li>
                                <li>
                                    <Link>Trainings</Link>
                                </li>
                                <li>
                                    <Link>Trainings</Link>
                                </li>
                                <li>
                                    <Link>Trainings</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="line">
                        <h2>Services</h2>
                        <nav>
                            <ul>
                                <li>
                                    <Link>Services</Link>
                                </li>
                                <li>
                                    <Link>Services</Link>
                                </li>
                                <li>
                                    <Link>Services</Link>
                                </li>
                                <li>
                                    <Link>Services</Link>
                                </li>
                                <li>
                                    <Link>Services</Link>
                                </li>
                                <li>
                                    <Link>Services</Link>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div className="line">
                        <h2>About Us</h2>
                        <nav>
                            <ul>
                                <li>
                                    <Link>Privacy&Politics</Link>
                                </li>
                                <li>
                                    <Link>Terms&Conditions</Link>
                                </li>
                                <li>
                                    <Link>Payment</Link>
                                </li>
                                <li>
                                    <Link>Help & Support</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Sections