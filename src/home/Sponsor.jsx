import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../src/assets/images/sponsor/01.png"
import image2 from "../../src/assets/images/sponsor/02.png"
import image3 from "../../src/assets/images/sponsor/03.png"
import image4 from "../../src/assets/images/sponsor/04.png"
import image5 from "../../src/assets/images/sponsor/05.png"
import image6 from "../../src/assets/images/sponsor/06.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay } from 'swiper/modules';


const sponsorList = [
    {
        imgUrl: image1,
    },
    {
        imgUrl: image2,
    },
    {
        imgUrl: image3,
    },
    {
        imgUrl: image4,
    },
    {
        imgUrl: image5,
    },
    {
        imgUrl: image6,
    },
];


const Sponsor = () => {
    return (
        <div className='sponsor-section section-bg'>
            <div className='container'>
                <div className='section-wrapper'>
                    <div className='sponsor-slider'>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                sponsorList.map((val, i) => (
                                    <SwiperSlide key={i}>
                                        <div className='sponsor-item'>
                                            <div className='sponsor-thumb'>
                                                <img src={val.imgUrl} alt='' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Sponsor
