import Search from "./Search.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Weather App
        </h1>
        <Search />
      </header>
      <p>
        <a href="https://github.com/pengallow/react-weather-app">GitHub Repository</a>
      </p>
    </div>
  );
}

export default App;
