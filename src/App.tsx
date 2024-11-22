import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from "./Kanbas";
import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import store from './Kanbas/store';
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
      </div>
      </Provider>
    </HashRouter>
    
  );
}

export default App;
