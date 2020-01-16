import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
// import Main from './Main'
// import Home from './Services'
// import Contacts from './Contacts'

// import logo from './logo.svg';
// import './App.css';

function Services() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Види робіт та ціни</h2>
        {/* <ul id='nav-list'>
          <li>
              <NavLink to='/' activeClassName='active'>
                Img to home
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' activeClassName='active'>
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' activeClassName='active'>
                Послуги
              </NavLink>
            </li>
            <li>
              <NavLink to='/contacts' activeClassName='active'>
                Контакти
              </NavLink>
            </li>
          </ul> */}

          {/* <Route exact path='/' component={Main} />
          <Route path='/services' component={Home} />
          <Route path='/contacts' component={Contacts} /> */}
      </div>
    </div>
  );
}

export default Services;
