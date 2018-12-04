import React from "react";
import ReactDOM from "react-dom";
import StackedBarChart from "./StackedBarChart";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <StackedBarChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
