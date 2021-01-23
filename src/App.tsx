import React from "react";
import logo from "./craig.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my site, I'll put more here eventually. If you need to contact
          me, message me on Discord, <code>Rodentman87#8787</code>, or email me
          at{" "}
          <a href="mailto:maisy@likesdinosaurs.com">maisy@likesdinosaurs.com</a>
        </p>
      </header>
    </div>
  );
}

export default App;
