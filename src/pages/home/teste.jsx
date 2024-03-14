import React, { useState, useEffect } from 'react';
//comp2

import ShoppingList from "./ShoppingList";

import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import Category2 from "../../components/Category/Category2";
import Category3 from "../../components/Category/Category3";
import Services from "../../components/Services/Services";
import Banner from "../../components/Banner/Banner";
import Partners from "../../components/Partners/Partners.jsx";

import headphone from "../../assets/hero/headphone.png";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";

import NewProducts from "../../components/Products/NewProducts";

import NewShoppingList from "./NewShoppingList";


import Products from "../../components/Products/Products";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import './home.css';
const BannerData = {
  discount: "30% DE DESCONTO",
  title: "Fine Smile",
  date: "10 de Jan a 28 de Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Promoção de Inverno",
  title4:
    "Descubra o melhor em tecnologia sonora. Experimente a qualidade incomparável dos nossos headphones.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% DE DESCONTO",
  title: "Happy Hours",
  date: "14 de Jan a 28 de Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Promoção de Inverno",
  title4:
    "Aproveite nossas ofertas especiais durante o Happy Hour! Não perca a chance de ter um smartwatch de última geração.",
  bgColor: "#2dcc6f",
};




const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
     
    
    {/**  <Hero handleOrderPopup={handleOrderPopup} /> */}
   
    <Banner data={BannerData} />
      <Category2 />
     
      <Category />
      <Services />
      
     
      <NewShoppingList />
     
     
      <Banner data={BannerData2} />
      <Blogs />
   {/*
      <Partners />
   
     <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    
    
    */}
      <Footer />
   
    
    
      </div>
  );
};

export default Home;

//  <Navbar handleOrderPopup={handleOrderPopup} />

// <Products />

//  <ShoppingList />

// <NewProducts />