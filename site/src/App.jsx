import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route>
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
