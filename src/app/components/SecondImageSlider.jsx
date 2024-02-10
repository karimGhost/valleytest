"use client"
import React from 'react';
import "swiper/css";
import Image from 'next/image';

import 'swiper/css/pagination';
import { Pagination, Navigation,  Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "../style/SecondImageSlider.css";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import star from "../images/star.svg"
import returnparcel from "../images/return.svg"
function SecondImageSlider({DataCollection}) {


  return (
    
 <div className='css-14o5bqb displayonBig'>
<div className='css-zkzhl8'>

<div class="css-16rrv4s">
    <div  style={{fontFamily:"serif", fontWeight:"600"}} class="css-6z2zhi">HOT DEAL</div>
    <div class="css-1m2ojv8">[UP TO 34% OFF] HAPPY HOUR</div>
    </div>

<Swiper
        slidesPerView={'1'}
        cssMode={true}
        mousewheel={true}
        rewind={true}

        keyboard={true}
        modules={[ Autoplay, Mousewheel, Keyboard]}
        spaceBetween={10}
        centeredSlides={true}
                pagination={{
          clickable: true,
        }}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper ImageSliderSecond"
style={{}}
      >
         {DataCollection?.map(item => (
   
     <SwiperSlide >
        <div className="css-1uikien" style={{paddingRight:"50px", width:"300px"}}>
      <div className="css-1489hrt">
        <div type="m" className="css-n9g88t">
          <div className="css-0">
            <div type="m"style={{display:"flex"}} className="css-1drsoe3">
              <img   
                 layout="fill"
                 objectFit="cover"
src={returnparcel} alt=")" />
              <span style={{background:"rgb(0, 158, 138)",height:"20px",color:"black"}}>Returnable</span>
            </div>
          </div>
          <div type="m" className="css-tdbqpt"></div>
        </div>
        <div  style={{width:"200px", height:"200px", paddingRight:"100px", paddingLeft:"100px"}} className="css-fc8ze7">
          <img
             layout="fill"
             objectFit="cover"
           
            src={item.publication.media[0].uri}
            data-src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/129d291f-6b1d-46aa-8620-f41c2a1bf488.jpeg"
className="css-17k8yqf"
style={{height:"200px", width:"200px", objectFit:"contain" }}
            alt=""
          />
        </div>
      </div>
      <div className="css-hljoma" style={{width:"160px"}} >
        <span>[{item?.discounts?.remain && item?.discounts?.remain &&  "Limited deals"}] {item?.publication?.productName} </span>
      </div>
      <div style={{width:"160px", fontWeight:"bold"}} className="css-1nc1eyv" >
        <span>{item.publication.priceInfo.discountRate}% </span>
        <span>{item.publication.priceInfo.price}</span>
      </div>
      <div className="css-1olijnw">
        <div className="css-1s4vgyd"></div>
        <div className="css-10fjvtr">
          <div className="css-ov1ktg" style={{display:"flex", fontSize:"12px", marginLeft:"20px", fontWeight:"bold"}}>
            <Image src={star} alt="star"   style={{width:"12px"}}  />
            <span style={{ marginTop:"-3px"}}>{item.publication.rating}</span>
          </div>
        </div>
      </div>
    </div>
        </SwiperSlide> 

         ))}
      </Swiper>
</div>

   

 </div>
      

    


  );
}

export default SecondImageSlider;