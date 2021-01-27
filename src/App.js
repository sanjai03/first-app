import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Para from './Para';
import Table from './Table'
import Form from './Form'

function App() {
  const tableData = [
    {
        id:1,
        name:"sanjeevi",
        designation : "trainee developer",
        Doj:"14/12/2020"
    },
    {
        id:2,
        name:"Ragavi",
        designation : "trainee developer",
        Doj:"14/12/2020"
    },
    {
        id:3,
        name:"Rohini",
        designation : "trainee developer",
        Doj:"14/12/2020"
    }
]
  return (
    <div className="App">
    
    <Head />
    <Para />
     <div className="row">
       <div className="col-6"><Form /></div>
       <div className="col-6"><Table tableData={tableData} /></div>
     </div>
    
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
