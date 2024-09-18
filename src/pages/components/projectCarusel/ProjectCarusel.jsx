import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './ProjectCarusel.css';

// import required modules




function ProjectCarusel({ header,data }) {
  return (
    <div className='projectCarusel'>



      <h2>{header}</h2>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}

        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </SwiperSlide>

        ))}

      </Swiper>
    </div>
  );
}

export default ProjectCarusel