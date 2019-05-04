import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
const Theme = React.createContext();
const theme = {
  background: "yellow"
};
function App() {
  return (
    <Theme.Provider value={theme}>
      <div className="App">
        <h1>Todo Center</h1>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "} */}
        <Todo />
      </div>
    </Theme.Provider>
  );
}

export default App;

export { Theme };
