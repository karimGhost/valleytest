"use client"
import React, { useRef, useState, useEffect } from 'react';

import Navigation from "./navigation/Navigation" 
import "../style/index.css";
import ImageSlider from "./ImageSlider";
import RestImageSlider from './RestImageSlider';
const PagesData = () => {



  const [mainShortcutData, setMainShortcutData] = useState([]);



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      const filteredData = data.filter(item => item.type === 'SINGLE' && item.viewType === 'TILE');
      console.log("filter", filteredData)
      setMainShortcutData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);




const [DataCollection, setDataCollection] = useState([]);

const [RestData,setRestData] =useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      const filteredData = data.items.filter(item => item.type === 'SINGLE' && item.viewType === 'TILE');

      console.log("fil", filteredData[0].items[0].publication)
console.log("Datac", filteredData)

      setDataCollection(filteredData[0].items);
      setRestData(filteredData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (

    <main className="css-fkv7k">
  <div className="css-3mrm0u">
<ImageSlider />
  </div>

 <div  style={{ flexWrap:"wrap",marginLeft:"35px", marginRight:"35px", display:"flex",justifyContent:"center", justifyItems:"center"}}> 
  
  {mainShortcutData.map(item => (
   

      <div className="css-10yrbxq   " style={{margin:"1px", padding:"1px"}}  >
      <div className="css-1i6ag2y" style={{margin:"1px"}}>
        <div className="css-q2wyx6">
          <img
            src={item.imageUrl}
            data-src="https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1705641890698-갤럭시모음2.jpg"
            alt="갤럭시 할인"
            className="css-1kzhogt"
          />
          <div className="css-1aajv28">갤럭시 할인</div>
        </div>
      </div>
    </div>

   
  
  ))} </div>
     {/*<SecondImageSlider DataCollection={DataCollection}/> */}  

<RestImageSlider DataCollection={RestData}/>

</main>
  )
}

export default PagesData

