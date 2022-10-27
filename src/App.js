import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This site was created by{" "}
          <a
            href="https://sage-pavlova-daaacc.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Maryna Zeinalova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Maryna-Zeinalova/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
