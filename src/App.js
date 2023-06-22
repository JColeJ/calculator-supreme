import logo from './calculator-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <b>Calculator Supreme</b>
        </p>
        <a
          className="App-link"
          href="https://github.com/JColeJ/calculator-supreme"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Project
        </a>
      </header>
    </div>
  );
}

export default App;
