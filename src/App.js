import React from "react";
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Wrapper from './components/wrapper';
import Issues from './components/issues';


import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
      <Issues></Issues>
      </Wrapper>
    </div>
  );
}

export default App;
