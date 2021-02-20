import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';

// js:20 => patch="/" exact , exact（bool）：為true時，則要求路徑與location.pathname必須完全匹配；


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch >
            <Route patch="/" exact> 
            <Header></Header>
            </Route>
          </Switch>
          </>
      </Router>    
    </div>
  );
}

export default App;
