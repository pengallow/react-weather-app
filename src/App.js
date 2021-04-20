import './App.css';
import Form from "./Form";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";
import CityName from "./CityName";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";
import WindSpeed from "./WindSpeed";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <head>
        <title>React Weather Application</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div class="container">
          <hr />
          <h1>What's the Weather?</h1>
          <hr />
          <Form />
          <hr />
          <h2>
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <CityName />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <WeatherIcon />
              </div>
              <div class="col-4">
                <CurrentTemp />
              </div>
              <div class="col-4">
                <WindSpeed />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <WeatherDescription />
              </div>
              <div class="col-4">
                <p>
                  <Celsius /> | <Fahrenheit />
                </p>
              </div>
              <div class="col-4">
                <Humidity />
              </div>
            </div>
          </h2>
          <hr />
          <div class="row">
            <h1>3-Hour Forecast</h1>
          </div>
          <Forecast />
        </div>
        <p>
          <a href="https://github.com/pengallow/react-weather-app">GitHub Repository</a>
        </p>
      </body>
    </div>
  );
}

export default App;
