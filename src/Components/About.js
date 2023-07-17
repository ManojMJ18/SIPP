import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">About</h1>

      <div className="row">
        <div className="col-md-6">
          <h3 className="text-info">Our Service</h3>
          <p>
          Welcome to our vibrant culinary world at [Your Food Recipe Website]! We are delighted to bring you a delightful assortment of mouthwatering recipes that will tantalize your taste buds and elevate your cooking experience.

[Your Food Recipe Website] is a haven for both novice and seasoned chefs, where you can explore a vast array of delectable recipes from around the globe. Whether you are in search of quick and easy weekday meals, indulgent desserts, healthy options, or exotic flavors, we have you covered.
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="text-info">Our Vision</h3>
          <p>
          "Our vision is to become the ultimate destination for food enthusiasts and home cooks, providing a delightful and immersive experience that ignites culinary inspiration, fosters creativity, and connects people through the joy of cooking."

At our food recipe website, we strive to empower individuals of all skill levels to explore, experiment, and share their passion for cooking. Through our extensive collection of meticulously curated recipes, we aim to cater to diverse tastes, dietary preferences, and cultural backgrounds. Our platform will serve as a virtual culinary haven, where visitors can discover an array of recipes, ranging from traditional classics to innovative fusion dishes.
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body bg-light">
          <h3 className="text-info">Additional Details</h3>
          <p>
          Recipes enable us to replicate our favorite dishes from restaurants or recreate the flavors from our
           travels. They provide a detailed roadmap, ensuring that you can enjoy a particular dish anytime you desire.
           Following a recipe allows you to capture the essence of a meal and bring it into your own kitchen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
