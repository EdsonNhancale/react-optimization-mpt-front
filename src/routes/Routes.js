import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


// import CookBook from '../pages/CookBook';
// import CookBookLists from '../pages/CookBookLists';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
const CookBook = lazy(() => import(/* webpackChunkName: "CookBook" */ '../pages/CookBook'));
const CookBookLists = lazy(() => import(/* webpackChunkName: "CookBookLists" */ '../pages/CookBookLists'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '../pages/Home'));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ '../pages/Login'));

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Routes>
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/book" element={<CookBook />} />
                        <Route path="/booklists" element={<CookBookLists />} />
                    </>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}