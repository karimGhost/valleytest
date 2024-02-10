import React  from 'react';
import styles from "./page.module.css";
import Navigation from "../app/components/navigation/Navigation"
import "./style/index.css"
import SecondImageSlider from "../app/components/SecondImageSlider";
import RestImageSlider from '../app/components/RestImageSlider';
import PagesData from "./components/PagesData"
export default function Home() {
 
 
  return (
    <div>
      <Navigation />
      <PagesData />
    </div>
  );
}

