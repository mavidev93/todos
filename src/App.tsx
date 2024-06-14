import React from 'react';
import { Counter } from './redux/features/counter/Counter';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Counter />*/}
      <Navbar/>
      </header>
        <main>
            <Todos/>
        </main>
    </div>
  );
}

export default App;
