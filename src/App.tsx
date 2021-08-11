import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Dezenove } from './components/Dezenove';
import { Vinte } from './components/Vinte';

function App() {
  const [page, setPage] = useState('Dezenove');

  const switchPage = () => {
    switch (page) {
      case 'Dezenove':
        return <Dezenove />;
      case 'Vinte':
        return <Vinte />;
    }
  };

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      {switchPage()}
      <Footer />
    </div>
  );
}

export default App;
