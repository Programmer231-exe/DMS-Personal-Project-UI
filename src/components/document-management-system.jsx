import * as React from 'react';
import { BrowserRouter as Router, Redirect, Routes, Route } from 'react-router-dom';
import Home from '../routes/home';
import Footer from '../utils/footer';


const DMS = (props) => {
    console.log(props)
    return <Router basename='/document-management-system'>
        <Routes>
            <Route path="/welcome" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route element={<Home/>} />
        </Routes>
        <Footer/>
    </Router>
}


export default DMS;