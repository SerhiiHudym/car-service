import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function Contacts() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>
            Адреса: м. Бориспіль, вул. Челюскінців, буд. 5
        </p>
        <p>
            Телефон: 095-555-55-55
        </p>
        <p>
            Пошта: lohnetdruzej@ukr.net
        </p>
        {/* width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20348.02373436!2d30.4910815!3d50.3944634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1579175974752!5m2!1sru!2sua" ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
