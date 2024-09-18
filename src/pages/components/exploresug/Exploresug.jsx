import React from 'react'
import './Exploresug.css'
import robots from './../../../components/img/robots.png'


function Exploresug() {
    const user = {
        name: 'Rashid'
      }
    
      return (
        
          <section className="explore">
            <div className="container">
              <div className="exploreWrap">
                <div className="greeding">
                  <h2>Hi {user.name},</h2>
                  <p>Get matched with sellers for your project.</p>
                  <button>Explore</button>
                </div>
                <div className="serviceinfo">
                  <div className="context">
                    <h2>Take your service online</h2>
                    <p>We're here to help you transition, launch & grow your new online business.</p>
                  </div>
                  <div className="image">
                    <img src={robots} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
                
        
      )
}

export default Exploresug