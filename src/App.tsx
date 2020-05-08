import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.scss';

import ItemReception from './containers/ItemReception';
import ItemIssue from './containers/ItemIssue';
import ItemReturn from './containers/ItemReturn';
import Sidebar from './components/Sidebar';


const App = () => (
  <Router>
    <div id="app">

      <Sidebar />

      <Switch>
        <div className="workspace">
          <Route exact path={['/', '/reception']}>
            <ItemReception />
          </Route>
          <Route path="/issue">
            <ItemIssue />
          </Route>
          <Route path="/return">
            <ItemReturn />
          </Route>
        </div>
      </Switch>

    </div>
  </Router>
);


export default App;
