import React, { useState } from 'react'
import './RelatedCards.css'
import { Link } from 'react-router-dom'
import { CgArrowTopRight } from "react-icons/cg";


function RelatedCards({ data,categories, title, mlink }) {

    const [activeCat, setactiveCat] = useState('')

    


    return (

        <section className="releatedCards">
            <div className="container">
                <div className="releatedCardsWrap">
                    <div className="heading">
                        <h4>{title}</h4>
                        <Link to={mlink} >More <span><CgArrowTopRight /></span></Link>
                    </div>
                    <div className="categories">
                        <div
                            onClick={() => setactiveCat('')}
                            className="category">
                            All
                        </div>
                        {
                            categories.map((item, index) =>
                                <div
                                    onClick={() => setactiveCat(item)}
                                    key={index}
                                    className="category">
                                    {item}
                                </div>
                            )
                        }
                    </div>
                    <div className="cards">
                        {data
                            .filter(item => item.category === activeCat || activeCat === '')
                            .map((item) => (
                                <Link key={item.id} className="card">
                                    <div className="image">
                                        <div className="imageWrap">
                                            <img src={item.img ? item.img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="" />
                                        </div>
                                    </div>
                                    <h4>{item.name}</h4>
                                    <span>{item.job}</span>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default RelatedCards