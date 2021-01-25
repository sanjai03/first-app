import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Para from './Para';
import Table from './Table'

function App() {
  return (
    <div className="App">
    
    <Head />
    <Para />
    <Table />
    </div> 
      /*<header className="App-header">
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
      </header>*/
    
  );
}

export default App;
