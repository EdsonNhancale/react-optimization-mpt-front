import React, { useState } from 'react'
import { CookBookContext } from '../context/CookBookContext'

let nextRecipeId = 1
export default function CookBookProvider({ children }) {
    const useRecipes = useState([]);

    return (
        <CookBookContext.Provider
            value={{
                useRecipes,
                nextRecipeId,
            }}
        >
            {children}
        </CookBookContext.Provider>
    )
}
