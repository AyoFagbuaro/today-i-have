import React from "react";
import "./App.css";
import Header from "./Header"; // Import the Header component
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
