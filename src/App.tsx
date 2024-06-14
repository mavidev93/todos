import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
        <main>
            <Todos/>
        </main>
    </div>
  );
}

export default App;
