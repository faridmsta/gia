import React, { useState } from 'react'
import './Landingpage.css'
import { Link } from 'react-router-dom'
import Header_ from '../../components/header_/Header_'
import amfreelancer from './../../components/img/amFreelancer.png'
import needfreelancer from './../../components/img/needFreelancer.png'
import RelatedCards from '../../components/relatedCards/RelatedCards'
import DoubleReleatedCards from '../../components/doubleReleatedCards/DoubleReleatedCards'
import frame20 from './../../components/img/frame20.png'
import group20 from './../../components/img/group20.png'
import frame25 from './../../components/img/frame25.png'
import frame135 from './../../components/img/frame133.png'
import frame23 from './../../components/img/frame23.png'
import frame24 from './../../components/img/frame24.png'
import frame26 from './../../components/img/frame26.png'
import frame27 from './../../components/img/frame27.png'
import undrawdata from './../../components/img/undrawdata.png'
import { CiSearch } from "react-icons/ci";
import Sections from '../components/sections/Sections'

const releatedFreelancers = [
  {
    img: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    name: "Kayla Person",
    category: 'Web Developers',
    job: "Software Engineer"
  },
  {
    img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid",
    name: "Elvin Cafarov",
    category: 'Mobile App Developers',
    job: "Software Engineer"
  },
  {
    img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    name: "Tommy White",
    category: 'Software Engineers',
    job: "Software Engineer"
  },
  {
    img: "https://www.elitesingles.com.au/wp-content/uploads/sites/77/2020/06/profileprotectionsnap-350x264.jpg",
    name: "Səfər Əliyev",
    category: 'Graphic Designers',
    job: "Data Analytics"
  },
  {
    img: "https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg",
    name: "Aydan Səfərova",
    category: 'UI/UX Designers',
    job: "Software Engineer"
  },
]

const categoriesFreelancers = [
  'Web Developers',
  'Mobile App Developers',
  'Software Engineers',
  'Graphic Designers',
  'UI/UX Designers',
  'Writers (Content, Copywriting, Technical Writing)',
  'Video Editors',
  'Social Media Managers',
  'SEO Specialists',
  'Project Managers',
  'Legal Consultants',
  'Business Development Experts',
  'Marketing Strategists',
  'Financial Advisors',
  'Virtual Assistants'
];

const releateAis = [
  {
    img: "https://cdn.pixabay.com/photo/2023/03/05/21/11/ai-generated-7832244_640.jpg",
    name: "Bobby",
    category: 'Data Entry Automation',
    job: "Software Engineer"
  },
  {
    img: "https://moxierobot.com/cdn/shop/files/Moxie-PDP-2.jpg?v=1698870913&width=3000",
    name: "Daisy",
    category: 'Data Analysis and Processing',
    job: "UX/UI Designer"
  },
  {
    img: "https://www.coop.co.za/wp-content/uploads/2024/02/coopmarketing_Navigating_the_Future_The_Convergence_of_AI_and_R_e7bea438-6d9a-4bc8-a103-a50394d6dfe9.png",
    name: "Katya",
    category: 'Automated Customer Support (Chatbots)',
    job: "Frontend Developer"
  },
  {
    img: "https://t4.ftcdn.net/jpg/05/67/46/61/360_F_567466191_M8cVuf9UM6tYmTdyeiGsieoGPnbKha3R.jpg",
    name: "Robin",
    category: 'Content Generation (Blog posts, Social media captions)',
    job: "Backend Developer"
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/03/20/03/06/ai-generated-8644499_640.jpg",
    name: "Emily",
    category: 'Automated Language Translation',
    job: "Software Engineer"
  },
]


const botCatagories = [
  'Data Entry Automation',
  'Data Analysis and Processing',
  'Automated Customer Support (Chatbots)',
  'Content Generation (Blog posts, Social media captions)',
  'Automated Language Translation',
  'Basic Image Editing',
  'Lead Generation',
  'Invoice and Billing Automation',
  'Email Marketing Automation',
  'Social Media Post Scheduling',
  'Data Scraping and Web Crawling',
  'AI-driven Product Recommendations',
  'Text Summarization',
  'Voice-to-Text Transcription',
  'Automated Report Generation'
];

const releateAiAndFreelancer = [
  {
    imgbot: "https://cdn.pixabay.com/photo/2023/03/05/21/11/ai-generated-7832244_640.jpg",
    imgHuman: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    namebot: "Bobby",
    nameHuman: 'Kayla',
    category: 'AI-augmented Web Developers',
    job: "Software Engineer"
  },
  {
    imgbot: "https://moxierobot.com/cdn/shop/files/Moxie-PDP-2.jpg?v=1698870913&width=3000",
    imgHuman: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid",
    namebot: "Daisy",
    nameHuman: 'Elvin',
    category: 'AI-enhanced Graphic Designers',
    job: "UX/UI Designer"
  },
  {
    imgbot: "https://www.coop.co.za/wp-content/uploads/2024/02/coopmarketing_Navigating_the_Future_The_Convergence_of_AI_and_R_e7bea438-6d9a-4bc8-a103-a50394d6dfe9.png",
    imgHuman: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    namebot: "Katya",
    nameHuman: 'Tommy',
    category: 'Data Scientists using AI for predictive analytics',
    job: "Frontend Developer"
  },
  {
    imgbot: "https://t4.ftcdn.net/jpg/05/67/46/61/360_F_567466191_M8cVuf9UM6tYmTdyeiGsieoGPnbKha3R.jpg",
    imgHuman: "https://www.elitesingles.com.au/wp-content/uploads/sites/77/2020/06/profileprotectionsnap-350x264.jpg",
    namebot: "Robin",
    nameHuman: 'Səfər',
    category: 'AI-driven Digital Marketers',
    job: "Backend Developer"
  },
  {
    imgbot: "https://cdn.pixabay.com/photo/2024/03/20/03/06/ai-generated-8644499_640.jpg",
    imgHuman: "https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg",
    namebot: "Emily",
    nameHuman: 'Aydan',
    category: 'AI-driven Digital Marketers',
    job: "Software Engineer"
  },
]

const doubleCategories = [
  'AI-augmented Web Developers',
  'AI-enhanced Graphic Designers',
  'Data Scientists using AI for predictive analytics',
  'AI-driven Digital Marketers',
  'AI-powered Copywriters',
  'AI-assisted Video Editors',
  'Automation and AI Consultants',
  'Machine Learning Engineers',
  'AI-assisted Social Media Managers',
  'AI-enhanced SEO Specialists',
  'AI-powered Business Analysts',
  'AI-driven Virtual Assistants',
  'AI-assisted Financial Analysts',
  'AI-enhanced User Experience Designers',
  'AI-optimized Customer Relationship Managers'
];



function Landingpage({ isfreelance, setIsfreelance }) {



  return (
    <div>
      <Header_ />
      <section className="isFreelancer">
        <div className="container">
          <div className="isFreelancerWrap">
            <div className="asker">
              <div className="title">
                <h4>I want to join as a.....</h4>
              </div>
              <div className="selections">
                <div className='label'
                  onClick={() => {
                    setIsfreelance(true)
                  }}
                >
                  <Link to='/signup'>
                    <input type="radio" name="isfreelance" id="amfrlance" />
                    <div

                      className="image">
                      <img src={amfreelancer} alt="amfreelancer" />
                    </div>
                    <h5>I  am a freelancer</h5>
                  </Link>
                </div>
                <div className='label' onChange={() => {
                  setIsfreelance(false)
                }}>
                  <Link to='/signup' >
                    <div
                      className="image">
                      <img src={needfreelancer} alt="amfreelancer" />
                    </div>
                    <h5>I need a freelancer</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedCards data={releatedFreelancers} categories={categoriesFreelancers} title={'Related Freelancers'} mlink={'/'} />
      <RelatedCards data={releateAis} categories={botCatagories} title={'Related AIs'} mlink={'/'} />
      <DoubleReleatedCards data={releateAiAndFreelancer} categories={doubleCategories} title={'Related AI and Freelancer services'} mlink={'/'} />
      <section id="aboutus">
        <section className="lookingFreelancer">
          <div className="container">
            <div className="lookingFreelancerWrap">
              <div className="left">
                <h2>Are you looking for <br />Freelancers?</h2>
                <p>Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice</p>
                <div className="inpBox">
                  <CiSearch size={20} />
                  <input type="text" placeholder="Search for freelancers" />
                </div>
              </div>
              <div className="right">
                <img src={frame20} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='findTheBest' >
          <div className="container">
            <div className="findTheBestWrap">
              <div className="left">
                <div className="image">
                  <img src={group20} alt="" />
                </div>
                <div className="stat">
                  <div className="card">
                    <span>500+</span>
                    <p>Freelancers</p>
                  </div>
                  <div className="card">
                    <span>300+</span>
                    <p>Work posted</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <h2>Find The Best <span className="blue">Freelancers</span> <br /> Here </h2>
                <p>Our freelance platform makes it easy for businesses to find the right talent by offering three types of freelancers: human professionals, AI bots, and experts who work with AI. Human freelancers bring creativity and skill to projects, while AI bots handle repetitive or data-driven tasks quickly.</p>
                <div className="line">
                  <Link>Post a project</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="workerWorbots">
          <div className="container">
            <div className="workerWorbotsWrap">
              <div className="right">
                <h2>Worker robots</h2>
                <p>For those needing both, hybrid experts use AI to enhance their work. Customers can easily search and hire the right freelancers for any project through our simple and user-friendly platform. Whether you need human expertise, AI-driven solutions, or a mix of both, we offer the best options to meet your business needs.</p>
              </div>
              <div className="left">
                <img src={frame25} alt="" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="categories">
        <div className="container">
          <div className="categoriesWrap">
            <h2>Search by categories</h2>
            <div className="cards">
              <Link className="card">
                <img src={frame135} alt="" />
                <p>Graphic Designers</p>
              </Link>
              <Link className="card">
                <img src={frame23} alt="" />
                <p>Web Developers</p>
              </Link>
              <Link className="card">
                <img src={frame24} alt="" />
                <p>Social Media Managers</p>
              </Link>
              <Link className="card">
                <img src={undrawdata} alt="" />
                <p>Data Analysis</p>
              </Link>
              <Link className="card">
                <img src={frame26} alt="" />
                <p>Cybersecurity Analysts</p>
              </Link>
              <Link className="card">
                <img src={frame27} alt="" />
                <p>UI/UX Designers</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Sections/>

    </div>
  )
}

export default Landingpage