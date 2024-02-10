"use client"
import React from 'react';
import LogoTest from "../../images/logoTest.svg";

import Home from "../../images/home.svg";
import search from "../../images/search.svg";
import bell from "../../images/bell.svg";
import logomobile from "../../images/logo-mobile.svg"
import vertical from "../../images/vertical.svg"
import "../../style/Navigation.css";
import Image from 'next/image';

function Navigation() {
  return (
    <header className="css-1dizb6t smallContainer css-ynr525">
      <>
      
   
      <div className="css-1j6fzon">
        <div className="css-kknodv">
          <Image src={LogoTest} alt="testvalley" className="css-1olrbel" />
          
          <div className="css-16zzwcy">category</div>
          
          <div className="css-j8i5az">
            <Image style={{marginTop:"-3px"}} src={search} alt="" className="css-15r8hvz" />
            <input type="search" placeholder="Search if you're worried about it!" className="css-18wyd8f" value="" />
          </div>
        </div>
        <div className="css-9ul4v3">
          <Image className="bar" src={Home} alt="" />
                    <button><Image src={vertical} alt="" /></button>

          <button>Login / Membership</button>
        </div>
      </div>




      <div className="css-jzer2w ">

      <div  className="css-sg8mv5">
      <Image     src={logomobile} alt="testvalley" style={{height:"35px", marginLeft:"20px", marginTop:"5px"}} className="css-9fe4we"/>
        
        <div className="css-u4f6e2">
          <Image src={bell} style={{marginLeft:"-50px"}} className="css-nrekmz"/>
            <Image src={search} style={{marginRight:"10px", marginLeft:"20px"}} alt="" className="css-8jtzl1"/>
              </div>

                </div>
             
               </div>


   </>
    </header>
    



  );
}

export default Navigation;
