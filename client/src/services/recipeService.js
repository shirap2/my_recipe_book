import axios from 'axios';

const API_URL = 'http://localhost:3000/recipes'; // Your Nest.js backend endpoint

// Fetch all recipes
export const getRecipes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

// Add a new recipe
export const addRecipe = async (recipe) => {
  try {
    const response = await axios.post(API_URL, recipe);
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};
