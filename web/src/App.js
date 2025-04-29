import './styles/App.css';
import './styles/reset.css'

import { makeRequest } from './api/api.js';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

export default App;
