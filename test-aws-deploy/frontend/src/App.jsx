import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendResponse, setBackendResponse] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setBackendResponse(data.message))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          Backend says: {backendResponse}
        </p>
      </header>
    </div>
  );
}

export default App;
