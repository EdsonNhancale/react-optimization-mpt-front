import React from 'react'
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
    return (
        <BrowserRouter>
            <Routes>
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/book" element={<CookBook />} />
                    <Route path="/booklists" element={<CookBookLists />} />
                </>
            </Routes>
        </BrowserRouter>
    )
}