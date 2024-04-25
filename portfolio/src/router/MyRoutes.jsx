import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from '../components/Home';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';
import { Cv } from '../components/Cv';
import {Contact} from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import {Footer} from "../components/layout/Footer"; 


export const MyRoutes = () => {
  return (
    <BrowserRouter>
    {/* HEADER Y NAVEGACIÓN */}
      <HeaderNav/>
    {/* CONTENIDO CENTRAL */}
    <section className='content'> 
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/cv" element={<Cv/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/*" element={
            <div>
            <h1 className='heading'>Error 404</h1>
            </div> } />
        </Routes>
      </section>
        <Footer/>
    </BrowserRouter>

  )
}

export default MyRoutes; 