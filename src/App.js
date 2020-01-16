import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
// import Levels from './components/Levels'
import Main from './components/Main'
import Home from './components/Services'
import About from './components/About'
import Contacts from './components/Contacts'
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <nav>
          <ul id='nav-list'>
          <li>
              <NavLink to='/' activeClassName='active'>
                ТОВ "Loh Service"
                {/* <img id="logo" src={logo}></img> */}
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName='active'>
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
          </ul>

          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Home} />
          <Route path='/contacts' component={Contacts} />
          {/* <Route path='/basic-routing' component={Levels} /> */}
        
          </nav>

          <footer>
            <p>
              тут футер. я футер. я копирайт. а я ще якась хуйня.
            </p>
          </footer>
          </div>
      
      </BrowserRouter>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
