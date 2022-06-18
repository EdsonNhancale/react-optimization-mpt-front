import { useContext } from "react";
import { CookBookContext } from "../services/context/CookBookContext";

export const useActionsRecipe = () => {
    let { nextRecipeId, useRecipes } = useContext(CookBookContext)
    const [recipes, setRecipes] = useRecipes

    const addRecipe = (recipe) => {
        const newRecipe = { ...recipe, id: nextRecipeId++ };
        console.log('new recipe added !', newRecipe);
        setRecipes([...recipes, newRecipe]);
    }

    const removeRecipe = (recipeId) => {
        console.log('remove recipe id', recipeId)
        setRecipes([...recipes].filter(recipe => recipe.id !== recipeId));
    }


    return {
        addRecipe,
        removeRecipe,
        recipes
    }
}