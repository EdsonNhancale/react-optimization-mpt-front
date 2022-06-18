import React, { useState } from 'react'
import AddNewRecipeForm from '../components/AddNewRecipeForm'
import { Link } from "react-router-dom";


let nextRecipeId = 1;
export default function CookBook({ setRecipes, recipes }) {

    const onAddRecipe = (recipe) => {
        const newRecipe = { ...recipe, id: nextRecipeId++ };
        setRecipes([...recipes, newRecipe]);
    }
    console.log("CookBook")
    return (
        <>
            <h2>My super cookbook</h2>

            <AddNewRecipeForm onAddRecipe={onAddRecipe} />
            <Link to="/booklists">List</Link>
        </>
    )
}
