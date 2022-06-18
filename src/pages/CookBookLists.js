import React from 'react'
import RecipesList from '../components/RecipesList'
import { Link } from "react-router-dom";

export default function CookBookLists({ setRecipes, recipes }) {

    const onRemoveRecipe = (recipeId) => {
        console.log('remove recipe id', recipeId)
        setRecipes([...recipes].filter(recipe => recipe.id !== recipeId));
    }
    console.log("CookBookLists")
    return (
        <>
            <h2>List of our recipes</h2>
            <Link to="/book">AddNew</Link>
            <RecipesList recipes={recipes} onRemoveRecipe={onRemoveRecipe} />
        </>
    )
}
