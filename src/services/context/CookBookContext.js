import { createContext } from "react";

export const CookBookContext = createContext({
    useRecipes: [],
    nextRecipeId: 1
})