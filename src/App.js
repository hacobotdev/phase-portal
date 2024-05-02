import React from "react";
import { DataProvider } from "./providers/data";
import Home from "./containers/home";
import './App.css';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Home/>
      </DataProvider>
    </div>
  );
}

export default App;
