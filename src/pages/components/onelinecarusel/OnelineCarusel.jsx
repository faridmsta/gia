import React, { useRef, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStarSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './OnelineCarusel.css'




function OnelineCarusel({data}) {
    return (
        <div className='onelineCaruselAll'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                className="mySwiper"
            >
                {
                    data.map((item,index) => (
                        <SwiperSlide key={index}>
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="middle">
                                <div className="profil">
                                    <div className="ppimage">
                                        <img src={item.ppimg} alt="" />
                                    </div>
                                    <div className="names">
                                        <h2>{item.name}</h2>
                                        <p>{(item.isBest) ? <span className='yellow'>Top Rated Seller</span> : <span>Level {item.level} Seller</span>}</p>
                                    </div>
                                </div>
                                <div className="text">
                                    <p>{item.text}</p>
                                </div>
                                <div className="reating">
                                    <IoStarSharp />
                                    <span>{item.raiting.toFixed(1)}</span>
                                    <span>({item.votes})</span>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="left">
                                    <LuMenu size={20} />
                                    <FaHeart size={18} />
                                </div>
                                <div className="right">
                                    <p>STARTING AT</p>
                                    <span>{item.strAt}/h</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
            <div className="continueBrowse">
                <div className="left">
                    <p>Continue browsing</p><FaArrowRightLong />
                </div>
            </div>
        </div>
    )
}

export default OnelineCarusel