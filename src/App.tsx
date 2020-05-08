import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import './App.scss';

import ItemReception from './containers/ItemReception';
import ItemIssue from './containers/ItemIssue';
import ItemReturn from './containers/ItemReturn';


const App = () => (
  <Router>
    <div id="app">

      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/reception">Прием</Link>
          </li>
          <li>
            <Link to="/issue">Выдача</Link>
          </li>
          <li>
            <Link to="/return">Возврат</Link>
          </li>
        </ul>
      </nav>

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
