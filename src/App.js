import logo from './logo.svg';
import './App.css';

function App() {
  // Environment variables are accessed via `process.env` in a Create React App build.
  // They must be prefixed with REACT_APP_.
  const greeting = process.env.REACT_APP_GREETING;
  const apiUrl = process.env.REACT_APP_API_URL;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload (webhook-test).
        </p>

        {/* --- START: ENVIRONMENT VARIABLE TEST SECTION --- */}
        <div style={{ border: '2px solid #61dafb', padding: '10px 20px', marginTop: '20px', borderRadius: '8px' }}>
          <h3>Testing Environment Variables:</h3>
          <p style={{ textAlign: 'left', fontSize: '1rem' }}>
            Greeting from env: <strong>{greeting || 'REACT_APP_GREETING is not set.'}</strong>
          </p>
          <p style={{ textAlign: 'left', fontSize: '1rem' }}>
            API URL from env: <strong>{apiUrl || 'REACT_APP_API_URL is not set.'}</strong>
          </p>
        </div>
        {/* --- END: ENVIRONMENT VARIABLE TEST SECTION --- */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
