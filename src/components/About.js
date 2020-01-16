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
        <div>
            <p>Ми є експертами в області обслуговування вантажної техніки будь-якого типу.</p>
            <p>Звертаючись до нас ви можете бути впевненими в якості виконаних робіт.</p>
            <p>Ми даємо гарантію на виконану роботу в розмірі 6 місяців.</p>
            <p>Блін, що його ще написати, херня якась.</p>
            <p>Тут ще трохи тексту для лизання жопи.</p>
        </div>

        <h3>
            Картінки
        </h3>
        <div>
            {/* <div>
                <img src={car1}></img>
            </div>
            <div>
                <img src={car2}></img>
            </div> */}
            <div>
                <img src={car3} />
            </div>
            <div>
                <img src={car4} />
            </div>
            <div>
                <img src={car5} />
            </div>
            <div>
                <img src={car6} />
            </div>
            <div>
                <img src={car7} />
            </div>
            <div>
                <img src={car8} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
