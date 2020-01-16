import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Car1 } from './images/';
const car1 = require('./images/1.jpeg');
const car2 = require('./images/2.jpeg')
const car3 = require('./images/3.jpeg')
const car4 = require('./images/4.jpeg')
const car5 = require('./images/5.jpeg')
const car6 = require('./images/6.jpeg')
const car7 = require('./images/7.jpeg')
const car8 = require('./images/8.jpeg')

function About() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>
            Про нас
        </h2>
        <p>
            Ми є експертами в області обслуговування вантажної техніки будь-якого типу.
            Звертаючись до нас ви можете бути впевненими в якості виконаних робіт.
            Ми даємо гарантію на виконану роботу в розмірі 6 місяців.
            Блін, що його ще написати, херня якась.
            Тут ще трохи тексту для лизання жопи.
        </p>

        <h3>
            Картінки
        </h3>
        <div>
            <div>
                <img src={car1}></img>
            </div>
            <div>
                <img src={car2}></img>
            </div>
            <div>
                <img src={car3}></img>
            </div>
            <div>
                <img src={car4}></img>
            </div>
            <div>
                <img src={car5}></img>
            </div>
            <div>
                <img src={car6}></img>
            </div>
            <div>
                <img src={car7}></img>
            </div>
            <div>
                <img src={car8}></img>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
