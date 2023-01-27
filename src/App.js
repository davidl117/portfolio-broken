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
<<<<<<< Updated upstream
      <Routes>
        <Route exact path="/" element={<Header/>}/>
        <Route exact path='/work' element={<Work/>} />
        <Route exact path='/contact' element={<Contact/>} />
=======
      <Routes basename="" >
        <Route  path='' element={<Header/>} />
        <Route  path='/work' element={<Work/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route path="*" element={<p>Page not found</p>} />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
}