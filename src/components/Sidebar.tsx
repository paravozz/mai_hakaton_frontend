import * as React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => (
  <nav className="sidebar">
    <div className="wb-logo">
      <img src="https://halykhelp.kz/wp-content/uploads/2018/08/Wildberries-logo.png" alt="wb_logo" />
      <span>Пункт выдачи заказов</span>
    </div>
    <Link to="/reception">Прием</Link>
    <Link to="/issue">Выдача</Link>
    <Link to="/return">Возврат</Link>
  </nav>
);


export default Sidebar;
