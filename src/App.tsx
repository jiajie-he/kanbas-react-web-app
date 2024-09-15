import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from "./Kanbas";
import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
          <h1>Welcome to Web Dev</h1>
          <h2>Jiajie He - SEC 01</h2>
          <a id="wd-github" href="https://github.com/jannunzi/kanbas-react-web-app-cs5610-fa24">click here </a>
          to go to relevant source code repositories
          {/* <Link to="/Labs">Labs</Link> | <Link to="/Kanbas">Kanbas</Link> */}
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
      </div>
    </HashRouter>
    
  );
}

export default App;
