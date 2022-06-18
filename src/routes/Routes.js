import React, { useState } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CookBook from '../pages/CookBook';
import CookBookLists from '../pages/CookBookLists';
import Home from '../pages/Home';
import Login from '../pages/Login';


export default function RoutesComponent() {
    const [recipes, setRecipes] = useState([])
    console.log("RoutesComponent")
    return (
        <BrowserRouter>
            <Routes>
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/book" element={<CookBook recipes={recipes} setRecipes={setRecipes} />} />
                    <Route path="/booklists" element={<CookBookLists recipes={recipes} setRecipes={setRecipes} />} />
                </>
            </Routes>
        </BrowserRouter>
    )
}