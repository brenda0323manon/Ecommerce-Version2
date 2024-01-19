// Import Swiper React components
import React , { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from  '../Assets/Image1.jpg';
import Image2 from '../Assets/Image2.jpg';
import Image3 from '../Assets/Image3.avif';
import Image4 from '../Assets/Image4.jpg';
import Image5 from '../Assets/pexels-karolina-grabowska-4735904 (1).jpg';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import './SlideShow.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SlideShow() {
    const [swiper, setSwiper] = useState(null);
    const [ , setActivateSlideIndex] = useState(0);

    const handleNextButtonClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrevButtonClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleSlideChange = () => {
        if (swiper) {
            setActivateSlideIndex(swiper.activeIndex)
        }
    }
  return (
    <div>
        <section>
            <div className="SideShow">
                <Swiper 
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSwiper={setSwiper}
                loop={true}
                navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                autoplay={{delay: 5000}}
                onSlideChange={handleSlideChange}
                
                >
                <SwiperSlide><img src={Image1} alt= "skincare products" className="Image1"/></SwiperSlide>
                <SwiperSlide><img src={Image2} alt= "skincare products" className="Image2"/></SwiperSlide>
                <SwiperSlide><img src={Image3} alt= "skincare products" className="Image3"/></SwiperSlide>
                <SwiperSlide><img src={Image4} alt= "skincare products" className="Image4"/></SwiperSlide>
                <SwiperSlide><img src={Image5} alt= "skincare products" className="Image5"/></SwiperSlide>

                <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
                <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
                </Swiper>
            </div>
        </section>
    </div>
  );
};




