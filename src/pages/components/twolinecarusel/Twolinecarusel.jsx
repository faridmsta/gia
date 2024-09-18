import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStarSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import './Twolinecarusel.css';

function Twolinecarusel({ data }) {
    // Group items into pairs for two-row layout
    const groupedData = [];
    for (let i = 0; i < data.length; i += 2) {
        groupedData.push(data.slice(i, i + 2));
    }

    

    return (
        <div className='onelineCaruselAll'>
            <Swiper
                slidesPerView={4}  // Adjust based on the number of pairs per row
                spaceBetween={30}
                className="mySwiper"
            >
                {
                    groupedData.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="row">
                                {group.map((item, idx) => (
                                    <div key={idx} className="column">
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
                                    </div>
                                ))}
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
    );
}

export default Twolinecarusel;
