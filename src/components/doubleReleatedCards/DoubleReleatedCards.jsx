import React, { useState } from 'react'
import './DoubleReleatedCards.css'
import { Link } from 'react-router-dom'
import { CgArrowTopRight } from "react-icons/cg";

function DoubleReleatedCards({ data,categories, title, mlink }) {

    const [activeCat, setactiveCat] = useState('')

    return (
        <section className="doubleReleatedCards">
            <div className="container">
                <div className="doubleReleatedCardsWrap">
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
                                        <img src={item.imgbot? item.imgbot : "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg" } alt="" />
                                        <img src={item.imgHuman? item.imgHuman : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }  alt="" />
                                    </div>
                                </div>
                                <h4>{item.namebot} & {item.nameHuman} </h4>
                                <span>{item.job}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoubleReleatedCards