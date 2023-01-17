import React from 'react';
import "./App.css";
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Work from './Components/Work';



export default function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Header/>}/>
        <Route exact path='/work' element={<Work/>} />
        {/* <Route exact path='/contact' element={<Contact/>} /> */}
      </Routes>
    </div>
  );
}