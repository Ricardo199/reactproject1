import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './pages/navbar';
import game from "./pages/game";
import extraStuff1 from "./pages/extrastuff1";
import extraStuff2 from "./pages/extrastuff2";
import about from "./pages/about";

function App() {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route path='./'/>
          <Route path='./pages/game' exact component={game} />
          <Route path='./pages/extrastuff1' component={extraStuff1} />
          <Route path='./pages/extrastuff2' component={extraStuff2} />
          <Route path='./pages/about' component={about} />
        </Switch>
      </Navbar>
    </Router>
  );
}

export default App;