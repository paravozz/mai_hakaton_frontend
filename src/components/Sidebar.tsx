import * as React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => (
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
);


export default Sidebar;
