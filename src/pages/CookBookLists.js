import React from 'react'
import RecipesList from '../components/RecipesList'
import { Link } from "react-router-dom";
import { useActionsRecipe } from '../hooks/useActionsRecipe';

export default function CookBookLists() {
    const { removeRecipe, recipes } = useActionsRecipe()

    // const onRemoveRecipe = (recipeId) => {
    //     console.log('remove recipe id', recipeId)
    //     setRecipes([...recipes].filter(recipe => recipe.id !== recipeId));
    // }
    console.log("CookBookLists")
    return (
        <>
            <h2>List of our recipes</h2>
            <Link to="/book">AddNew</Link>
            <RecipesList recipes={recipes} onRemoveRecipe={removeRecipe} />
        </>
    )
}
