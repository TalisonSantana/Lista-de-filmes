import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Rotas from './components/Rotas';

class App extends Component {

  render() {
    return (
      <main className="App">
        <BrowserRouter >
          <Rotas />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;

