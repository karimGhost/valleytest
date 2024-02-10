"use client"
import React from 'react';
import "swiper/css";
import Image from 'next/image';

import 'swiper/css/pagination';
import { Pagination, Navigation,  Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "../style/SecondImageSlider.css";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import star from   "../images/star.svg";

import returnparcel from "../images/return.svg"

function RestImageSlider({DataCollection}) {
    const dealsData = [
        { type: "Hotdeals", deal: "[UP TO 34% OFF] HAPPY HOUR]" },
        { type: "New In", deal: "#Subjectable new product" },
        { type: "Benheim New Input EVENT", deal: "exclusive" },
        { type: "Logitech AS Guaranteed", deal: "#Definite AS guarantee with genuine products, not bottled water!" },

        { type: "16-inch LGgram Pro, thinner and...", deal: "Additional discount coupons + 30-day experience fee reduction event" },
        { type: "Game Machine Lowest & New...", deal: "#Limited amount special price #Contrast" },

        { type: "Electric mat LAST BIG SALE...", deal: "UP TO 64% SALE" },
        { type: "New Year's Gift Referrer, Tefal", deal: "UP TO 74% ▼" },
        { type: "MacBook Clearance Sale!", deal: "Only in test valley! Let's try 30 days and buy" },

    
      ];
      


  return (

 

<>
  { DataCollection.map((item, index) => (

 <div key={index} className='css-14o5bqb '>
<div className='css-zkzhl8 '>

<div class="css-16rrv4s">

    <div  style={{fontFamily:"serif", fontWeight:"600"}} class="css-6z2zhi">{dealsData[index].type}</div>
    <div class="css-1m2ojv8">{dealsData[index].deal}</div>
    </div>

<Swiper
        slidesPerView={'3'}
        cssMode={true}
        mousewheel={true}

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
     
       
        className="mySwiper ImageSliderSecond  displayonBig "

      >
         {DataCollection[index]?.items.map((item, index) => (
   
     <SwiperSlide >
      
<div className="css-1mrl3y5">
  <div className="css-12sqe98">
 
    <div className="css-1qykdtd">
      <div className="css-10tfwg6">


        {/* Repeat the following block for each product */}
       
        <div className="css-rn53ph">
          <div className="css-1uikien">
           
            <div className="css-1489hrt">
             
              <div type="m" className="css-n9g88t">

                <div type="m" style={{ display:"flex", background:"rgb(0, 158, 138)", width
                                  :"fit-content"}} className="css-1drsoe3">
                                      <Image src={returnparcel} alt=""/> return</div>
                                      
                                      </div> 
              
           
            
              <div   style={{width:"190%",height:"200px"}} className="css-fc8ze7">
             <img style={{objectFit:"contain"}} src={item?.publication?.media[0]?.uri} data-src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/adcb6509-bd99-4db1-8ed3-dd181631f944.jpeg" className="css-17k8yqf" />

              </div>

            </div>
                                     
                                    
 
            <div style={{fontSize:"10px"}} className="css-hljoma">{item?.publication?.productName}</div>
            <div className="css-1nc1eyv"><span style={{color:"rgb(255, 80, 35)"}}>{item?.publication.priceInfo.discountRate}%</span>{item?.publication.priceInfo.price}</div>
            <div className="css-1olijnw">
        <div className="css-1s4vgyd"></div>
        <div className="css-10fjvtr">
          <div className="css-ov1ktg" style={{display:"flex", fontSize:"12px", marginLeft:"20px", fontWeight:"bold"}}>
            <Image src={star} alt="star" width="12px" style={{width:"12px", marginTop:"-2px"}} height="12px" />
            <span style={{ marginTop:"-3px"}}>{item?.publication.rating}</span>
          </div>
        </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>

        </SwiperSlide> 

         ))}
      </Swiper>

      <div style={{display:"grid", gridTemplateColumns:"auto auto"}}>

     
      {DataCollection[index]?.items.map((item, index) => (



<div className='displayonSmall'>

<div className="css-1mrl3y5">
  <div className="css-12sqe98">
 
    <div className="css-1qykdtd">
      <div className="css-10tfwg6">


        {/* Repeat the following block for each product */}
       
        <div className="css-rn53ph">
          <div className="css-1uikien">
           
            <div className="css-1489hrt">
             
              <div type="m" className="css-n9g88t">

                <div type="m" style={{ display:"flex", background:"rgb(0, 158, 138)", width
                                  :"fit-content"}} className="css-1drsoe3">
                                      <Image src={returnparcel} alt=""/> return</div>
                                      
                                      </div> 
              
           
            
              <div  style={{width:"190%",height:"200px"}} className="css-fc8ze7">
             <img style={{objectFit:"contain"}} src={item?.publication?.media[0]?.uri} data-src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/adcb6509-bd99-4db1-8ed3-dd181631f944.jpeg" className="css-17k8yqf" />

              </div>

            </div>
                                     
                                    
 
            <div style={{fontSize:"10px"}} className="css-hljoma">{item?.publication?.productName}</div>
            <div className="css-1nc1eyv"><span style={{color:"rgb(255, 80, 35)"}}>{item?.publication.priceInfo.discountRate}%</span>{item?.publication.priceInfo.price}</div>
            <div className="css-1olijnw">
              <div className="css-1s4vgyd"></div>
              <div className="css-10fjvtr">
                <div className="css-ov1ktg">
                  <Image src={star} alt="별점" width="12px" height="12px" />{item?.publication.rating}
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
</div> 



      ))}
</div>

</div>

   

 </div>
      




      ))}




</>
       
    
         

  );
}

export default RestImageSlider;