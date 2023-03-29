import React from 'react';
// import "./App.css";
import "./styles.css";
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom';
import Work from './Components/Work';
import logo from "./logo.png"


export default function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <img src={logo} className='logo' alt=""/>
      <Routes basename="/portfolio">
        <Route  path='/' element={<Header/>} />
        <Route  path='/work' element={<Work/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
}