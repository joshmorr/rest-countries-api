import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import './App.css';

export default function App() {
  
  return (
    <Router>
      <div className="app">
        <div className="header">
          <h3 className="title">Where in the world?</h3>
        </div>
        <Home/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
