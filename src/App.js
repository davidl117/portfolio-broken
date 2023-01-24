import React from 'react';
import "./App.css";
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom';
import Work from './Components/Work';
// import data from './Components/data';



export default function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Header/>}/>
        <Route exact path='/work' element={<Work/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}