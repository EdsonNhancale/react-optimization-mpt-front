import React from 'react'
import AddNewRecipeForm from '../components/AddNewRecipeForm'
import { Link } from "react-router-dom";
import { useActionsRecipe } from "../hooks/useActionsRecipe";

export default function CookBook() {
    const { addRecipe } = useActionsRecipe()

    // const onAddRecipe = (recipe) => {
    //     const newRecipe = { ...recipe, id: nextRecipeId++ };
    //     setRecipes([...recipes, newRecipe]);
    // }
    console.log("CookBook")
    return (
        <>
            <h2>My super cookbook</h2>

            <AddNewRecipeForm onAddRecipe={addRecipe} />
            <Link to="/booklists">List</Link>
        </>
    )
}
