import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [handle, setHandle] = useState('');
  const [result, setResult] = useState({});

  async function handleClick() {
    const response = await fetch(`/api/products?handle=${handle}`);
    const data = await response.json();
    const dataProcessed = JSON.stringify(data, null, 2);
    debugger;
    setResult(dataProcessed);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>Enter product handle</label>
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <button type="button" style={{ padding: '1rem' }} onClick={handleClick}>
          Fetch products
        </button>

        <label>Result</label>
        <textarea
          style={{ width: '95%', height: '25rem' }}
          className="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
