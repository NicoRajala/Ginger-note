import React from 'react';
import { Counter } from './features/Counter';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>Ginger'Note</h1>

      {/* Sidebar */}
      <Sidebar/>

      {/* Chat */}
    </div>
  );
}

export default App;
