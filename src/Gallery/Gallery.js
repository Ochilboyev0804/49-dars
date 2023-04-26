import '../Gallery/Gallery.css';
import VectorRed from '../assets/images/Vector-red.svg';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Gallery.css";
import { EffectCoverflow, Pagination } from "swiper";

function Gallery() {
    return (
        <div className='Gallery d-lg-flex d-md-block align-items-center justify-content-center'>
             <div className='container-fluid'>
            <div className='py-[130px]'>
            <div className='lg:text-start '>
            <h4 className="h4">News</h4>
    <img src={VectorRed} width='40' height='9' alt="Vector Red" className="mx-lg-0 mx-auto" />
    <h1 className="h1 mb-0 " >Photo Gallery</h1>
    <p className='Gallery-text mt-[24px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
    <button type="button" class="btn btn-outline-danger m-0">View More</button>
            </div>
        </div>
        </div>
        
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwipers "
      >
        <SwiperSlide className='swipper__slide'>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className='swipper__slide'>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
        </div>
       
        
    );
}
export default Gallery;