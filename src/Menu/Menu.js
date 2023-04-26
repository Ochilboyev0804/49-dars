import Card from '../Card/Cards';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Menu.css";
import {Pagination} from "swiper";



function Menu() {
  
  return (
    <div className='container-fluid'>
        <h1 className='Menu__title text-start'>Our Regular Menu Pack</h1>
        <div>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-[30px]"
      >
        <SwiperSlide className='swiper__menu'> All </SwiperSlide>
        <SwiperSlide className='swiper__menu'> Shawarma </SwiperSlide>
        <SwiperSlide className='swiper__menu'> Turk Kebab </SwiperSlide>
        <SwiperSlide className='swiper__menu'> Hamburger Kebab </SwiperSlide>
        <SwiperSlide className='swiper__menu'> Doner kebab </SwiperSlide>
        <SwiperSlide className='swiper__menu'> Shish kebab </SwiperSlide>
        <SwiperSlide className='swiper__menu'> French fries Pizza </SwiperSlide>
        <SwiperSlide className='swiper__menu'> Desserts </SwiperSlide>
       
      </Swiper>

 
        </div>
         <div>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-[30px]"
      >
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
       
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-[30px]"
      >
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
       
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-[120px]"
      >
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
        <SwiperSlide className='swiper__slide'> <Card/> </SwiperSlide>
       
      </Swiper>
         </div>
    
    </div>
    
  );
}
export default Menu;