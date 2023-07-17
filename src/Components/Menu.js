import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  // Assuming you have an array of recipes
  const recipes = [
    {
      id: 1,
      name: 'KUNDAPURA CHICKEN',
      description: 'Famous curry from coastal belt of KARNATAKA',
      image: "https://lh3.googleusercontent.com/eg5Ns85pHaCDCaT5Lk6kB0G2nNZXAh78G_RRxa3wCIRNSoduanLy4RoMCW9gpipHsh8aq1j03rFYKE9ybQUYcUGdCeANB_1xeOrw3eRVcg",
    },
    {
      id: 2,
      name: 'CHICKEN BIRYANI',
      description: 'Master the ultimate Hyderabadi Biryani',
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      name: 'BLACK FOREST',
      description: ' MASTER THE MOUTH WATERING BLACK FOREST AT YOUR FINGERTIPS ',
      image: 'data:image/jpeg;base64,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',
    },
    // Add more recipes as needed
  ];

  return (
    <div>
      <h1>Menu</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <div className="recipe-details">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
