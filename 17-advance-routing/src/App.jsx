import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import NotFound from "./pages/NotFound.jsx";
import Men from "./pages/Products/Men.jsx";
import Women from "./pages/Products/Women.jsx";
import Kid from "./pages/Products/Kid.jsx";
import Courses from "./pages/Courses.jsx";

const App = () => {
    return (
        <div className={'bg-black text-white h-screen '}>
            <Navbar />
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/about'} element={<About/>} />
                    <Route path={'/courses'}element={<Courses/>}/>
                    <Route path={'/product'} element={<Product/>} >
                        <Route path={'men'} element={<Men/>}/>
                        <Route path={'women'} element={<Women/>}/>
                        <Route path={'kid'} element={<Kid/>}/>
                    </Route>
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            <Footer />
        </div>
    )
}
export default App
