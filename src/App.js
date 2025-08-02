import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Home/HomePage';
import Dashboard from './Admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="app">

        <Routes>
           <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;