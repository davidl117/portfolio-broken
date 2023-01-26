import React from 'react';
import "./App.css";
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom';
import Work from './Components/Work';



export default function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <Routes>
        <Route  path="/" element={<Header/>} />
        <Route  path='/work' element={<Work/>} />
        <Route  path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}