"use client"
import React, {  useState, useEffect } from 'react';
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Navigation,  Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "../style/Swiper.css";
import 'swiper/css/navigation';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

function ImageSlider() {


const [ImageData, setImageData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.testvalley.kr/main-banner/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const filteredData = data.filter(item => item.type === 'SINGLE' && item.viewType === 'TILE');
        console.log("data", filteredData)
        setImageData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    
     <div className='displayonBig'>
      <Swiper
        slidesPerView={'3'}
        cssMode={true}
       navigation={true}
        mousewheel={true}
        rewind={true}

        keyboard={true}
        modules={[Navigation, Pagination,Autoplay, Mousewheel, Keyboard]}
        spaceBetween={30}
        centeredSlides={true}
                pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{justifyContent:"center"}}
      >
       {ImageData.map(item => (
        <SwiperSlide

        style={{height:"340px", paddingRight:"580px", paddingLeft:"400px", justifyContent:"center"}}

        className='imgcontainer ' >
      <img 
           
      style={{height:"340px"}}

      src={item.pcImageUrl} className='imageSidze imageSide'/>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className='displayonSmall'>
      <Swiper
        slidesPerView={'1'}
        cssMode={true}
        mousewheel={true}
        rewind={true}

        keyboard={true}
        modules={[Navigation, Pagination,Autoplay, Mousewheel, Keyboard]}
        spaceBetween={3}
        centeredSlides={true}
                pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
       {ImageData.map(item => (
        <SwiperSlide>
          <div style={{height:"400px"}} >
  <img  style={{width:"100%", height:"100%"}} src={item.pcImageUrl} className='imageSidze'/>
          </div>
    
        </SwiperSlide>
        ))}
      </Swiper>
    </div>



    </>


    


  );
}

export default ImageSlider;