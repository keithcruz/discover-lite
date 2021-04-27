import "./App.css";
import { DateInput } from "./components/DateInput";

function App() {
  async function getApi(event) {
    event.preventDefault();
    const result = await fetch("/api");

    const json = await result.text();
    console.log(json);
    console.log("foo");
  }
  return (
    <div className="App">
      <header className="App-header">
        <DateInput />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={getApi}
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
