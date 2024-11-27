import React, { useState, useEffect } from 'react';
import { getRecipes, addRecipe } from '../services/recipeService';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' });

  // Fetch recipes on component mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  // Handle form submission
  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      const addedRecipe = await addRecipe(newRecipe);
      setRecipes([...recipes, addedRecipe]);
      setNewRecipe({ title: '', ingredients: '', instructions: '' }); // Reset form
    } catch (error) {
      console.error('Failed to add recipe:', error);
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </li>
        ))}
      </ul>

      <h2>Add a Recipe</h2>
      <form onSubmit={handleAddRecipe}>
        <input
          type="text"
          placeholder="Title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
        />
        <textarea
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
        <textarea
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeList;
