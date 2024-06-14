import React from 'react';
import { Counter } from './redux/features/counter/Counter';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Counter />*/}
      <Navbar/>
      </header>
    </div>
  );
}

export default App;
