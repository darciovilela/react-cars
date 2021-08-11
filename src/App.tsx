import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Dezenove } from './components/Dezenove';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dezenove />
      <Footer />
    </div>
  );
};

export default App;
