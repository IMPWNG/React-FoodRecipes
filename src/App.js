import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '51550a0b';
  const APP_KEY = '29aa6e7b17ae06225bf2040f9bd65b61';

  const [recipes, SetRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    SetRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className='app'>
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button className="search-button" type="submit">Search</button>
     </form> 
     {recipes.map(recipe => (
       <Recipe />
     ))};
    </div>
  );
};

export default App;
