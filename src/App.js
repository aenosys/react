import logo from './logo.svg';
import './App.css';

function App() {
  // --- Define all your environment variables here ---
  // They must be prefixed with REACT_APP_ in a Create React App.
  const environment = process.env.REACT_APP_ENVIRONMENT;
  const greeting = process.env.REACT_APP_GREETING;
  const apiUrl = process.env.REACT_APP_API_URL;
  const featureFlag = process.env.REACT_APP_ENABLE_COOL_FEATURE;
  const appVersion = process.env.REACT_APP_VERSION;

  // Create an array for easy rendering in a table
  const envVariables = [
    { name: 'REACT_APP_ENVIRONMENT', value: environment },
    { name: 'REACT_APP_GREETING', value: greeting },
    { name: 'REACT_APP_API_URL', value: apiUrl },
    { name: 'REACT_APP_ENABLE_COOL_FEATURE', value: featureFlag },
    { name: 'REACT_APP_VERSION', value: appVersion },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This app is running in the <strong>{environment || 'UNKNOWN'}</strong> environment.
        </p>

        {/* --- START: ENVIRONMENT VARIABLE TEST SECTION --- */}
        <div className="env-container">
          <h3>Environment Variables Loaded:</h3>
          <table className="env-table">
            <thead>
              <tr>
                <th>Variable Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {envVariables.map(({ name, value }) => (
                <tr key={name}>
                  <td><code>{name}</code></td>
                  <td><strong>{value || <span className="not-set">Not Set</span>}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
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
