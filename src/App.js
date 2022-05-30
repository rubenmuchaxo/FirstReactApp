/**
 * 
 */

import logo from './logo.svg';
import './App.css';


//2 types of components
// -classes
// -functions

function App() {
  //return is mandatory
  return (
    //returns have only one object
    <div className="App">
      <header className="App-header">
        {/* The variables are surrounded by brackets */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>

      </div>
      <footer>
        &copy; r.muchaxo
      </footer>
    </div>
  );
}

export default App;
