import React from "react";
import './style/index.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const App = () => {
        return (
            <Router>
                <Navbar/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path='/logement/:id' element={<Accommodation/>}/>
                        <Route path='/a-propos' element={<About/>}/>
                        <Route path="*" element={ <Error /> } />
                    </Routes>
                <Footer/>
            </Router>
        );
}
