import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom"


// js:20 => patch="/" exact , exact（bool）：為true時，則要求路徑與location.pathname必須完全匹配；


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch >
            <Route patch="/" exact> 
<h1>This is the Hp </h1>

            </Route>
          </Switch>
          </>
      </Router>    
    </div>
  );
}

export default App;
