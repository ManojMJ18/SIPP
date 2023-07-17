import React from 'react';
import './Home.css';


const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>THE ULTIMATE FOOD RECIPE GUIDE</h1>
        <p>EXPLORE THE VARIOUS DELICACIES AT YOUR FINGERTIPS </p>
       
      </div>
      <img
        src="https://www.lumina.com.ph/assets/news-and-blogs-photos/Famous-Delicacies-in-Laguna-To-Try-and-Its-Not-Buko-Pie/Famous-Delicacies-in-Laguna-To-Try-and-Its-Not-Buko-Pie.webp"
        alt="Food"
        className="homepage-image"
      />
    </div>
  );
};

export default HomePage;
