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
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ЦЕНЫ НА БАЗОВЫЕ УСЛУГИ
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
            <li>Стоимость нормо-часа от 320 грн.</li>
            <li>Замена масла в двигателе от 150 грн.</li>
            <li>Компьютерная диагностика от 200 грн.</li>
            <li>Плановое техобслуживани от 750 грн.</li>
            <li>Замена масла в КПП от 250 грн.</li>
          </ul>      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Сервисное ТО        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
          <li>Замена масла в двигателе	от 150 грн.</li>
          <li>Плановое техобслуживание	от 750 грн.</li>
          <li>Компьютерная диагностика	от 200 грн.</li>
          <li>Замена воздушного фильтра двигателя	от 48 грн.</li>
          <li>Замена воздушного фильтра салона	от 108 грн.</li>
          <li>Замена масла в КПП	от 250 грн.</li>
          <li>Замена охлаждающей жидкости	от 125 грн.</li>
          <li>Замена ремня ГРМ	от 950 грн.</li>
          <li>Замена комплекта ремня ГРМ с роликами и водяной помпой	от 1 500 грн.</li>
          <li>Замена роликов ГРМ	от 950 грн.</li>
          <li>Замена приводного ремня	от 250 грн.</li>
          <li>Замена роликов привода	от 250 грн.</li>
          <li>Промывка двигателя	от 100 грн.</li>
          <li>Долив масла КПП	от 125 грн.</li>
          <li>Контрольный осмотр и долив технических жидкостей	от 125 грн.</li>
        </ul>      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        тормозная система        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
          <li>Диагностика тормозной системы	от 125 грн.</li>
          <li>Ремонт тормозной системы	от 250 грн.</li>
          <li>Замена передних тормозных колодок	от 250 грн.</li>
          <li>Замена задних тормозных колодок	от 300 грн.</li>
          <li>Замена задних тормозных дисков	от 234 грн.</li>
          <li>Замена тормозной жидкости	от 160 грн.</li>
          <li>Замена барабанных колодок	от 313 грн.</li>
          <li>Замена тормозных барабанов	от 300 грн.</li>
          <li>Замена тормозного шланга	от 250 грн.</li>
          <li>Замена троса ручного тормоза	от 500 грн.</li>
          <li>Регулировка ручного тормоза	от 113 грн.</li>
          <li>Ремонт суппорта (однопоршневого) от 285 грн.</li>
          <li>Замена главного тормозного цилиндра	от 500 грн.</li>
          <li>Замена рабочего тормозного цилиндра	от 300 грн.</li>
          <li>Замена вакуумного усилителя тормозов	от 750 грн.</li>
          <li>Ремонт тормозного цилиндра	от 380 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingFour">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Подвеска        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
          <li>Диагностика ходовой части автомобиля	от 118 грн.</li>
          <li>Замена подшипника ступицы	от 300 грн.</li>
          <li>Замена передних амортизаторов	от 350 грн.</li>
          <li>Замена задних амортизаторов (окремі від пружини) от 300 грн.</li>
          <li>Замена шаровой опоры (з болтами) от 225 грн.</li>
          <li>Замена втулки стабилизатора	от 125 грн.</li>
          <li>Замена стойки стабилизатора	от 100 грн.</li>
          <li>Замена пружин подвески (окремі від стійки амортизатора) от 175 грн.</li>
          <li>Ремонт ходовой части от 250 грн.</li>
          <li>Замена опоры передней стойки	от 350 грн.</li>
          <li>Замена сайлентблоков (Со снятием рычага) от 350 грн.</li>
          <li>Замена рулевого наконечника	от 125 грн.</li>
          <li>Замена верхней опоры амортизатора	от 250 грн.</li>
          <li>Снятие-установка передних амортизаторов	от 350 грн.</li>
          <li>Снятие-установка задних амортизаторов	от 300 грн.</li>
          <li>Замена передних рычагов	от 300 грн.</li>
          <li>Замена сальника полуоси	от 288 грн.</li>
          <li>Замена наконечника рулевой тяги	от 125 грн.</li>
          <li>Снятие-установка передней полуоси	от 300 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingFive">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Двигатель        </button>
      </h5>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
        <li>Диагностика двигателя	от 300 грн.</li>
    <li>Замена водяной помпы	от 500 грн.</li>
    <li>Капитальный ремонт двигателя	от 3 750 грн.</li>
    <li>Замена термостата	от 250 грн.</li>
    <li>Замена радиатора охлаждения	от 750 грн.</li>
    <li>Замена прокладки блока цилиндров (ГБЦ)	от 1 500 грн.</li>
    <li>Замена цепи ГРМ	от 1 500 грн.</li>
    <li>Замена прокладки клапанной крышки	от 350 грн.</li>
    <li>Замена сальника распредвала	от 1 250 грн.</li>
    <li>Замена сальника коленвала	от 1 750 грн.</li>
    <li>Ремонт головки блока цилиндров (ГБЦ)	от 2 500 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingFuel">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFuel" aria-expanded="false" aria-controls="collapseFuel">
        Топливная система        </button>
      </h5>
    </div>
    <div id="collapseFuel" class="collapse" aria-labelledby="headingFuel" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
        <li>Замена топливного фильтра	от 125 грн.</li>
<li>Замена бензиновой форсунки
    (1 шт)	от 193 грн.</li>
<li>Замена дроссельной заслонки	от 450 грн.</li>
<li>Замена топливного насоса	от 375 грн.</li>
<li>Замена топливного бака	от 1 138 грн.</li>
<li>Диагностика топливной системы	от 125 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingElectric">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseElectric" aria-expanded="false" aria-controls="collapseElectric">
        Электрика        </button>
      </h5>
    </div>
    <div id="collapseElectric" class="collapse" aria-labelledby="headingElectric" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
        <li>Диагностика электрики	от 250 грн.</li>
    <li>Диагностика аккумулятора	от 85 грн.</li>
    <li>Настройка системы зажигания	от 375 грн.</li>
    <li>Ремонт генератора	от 375 грн.</li>
    <li>Замена генератора	от 380 грн.</li>
    <li>Замена аккумуляторной батареи	от 125 грн.</li>
    <li>Ремонт стартера	от 375 грн.</li>
    <li>Замена стартера	от 380 грн.</li>
    <li>Ремонт электропроводки	от 250 грн.</li>
    <li>Замена катушки зажигания	от 250 грн.</li>
    <li>Замена автолампочек	от 81 грн.</li>
    <li>Замена замка зажигания	от 500 грн.</li>
    <li>Замена высоковольтных проводов	от 250 грн.</li>
    <li>Ремонт сигнализации
        (Установка сигнализации)	от 1 630 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingExhaust">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseExhaust" aria-expanded="false" aria-controls="collapseExhaust">
        Выхлопная система        </button>
      </h5>
    </div>
    <div id="collapseExhaust" class="collapse" aria-labelledby="headingExhaust" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
        <li>Диагностика выхлопной системы	от 63 грн.</li>
<li>Замена лямбда-зонда	от 250 грн.</li>
<li>Замена катализатора	от 500 грн.</li>
<li>Замена глушителя	от 500 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingСlutch">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseСlutch" aria-expanded="false" aria-controls="collapseСlutch">
        Сцепление        </button>
      </h5>
    </div>
    <div id="collapseСlutch" class="collapse" aria-labelledby="headingСlutch" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
        <li>Диагностика сцепления	от 63 грн.</li>
<li>Замена главного цилиндра сцепления	от 413 грн.</li>
<li>Замена двухмассового маховика	от 1 413 грн.</li>
<li>Регулировка тросика сцепления	от 163 грн.</li>
<li>Замена комплекта сцепления	от 1 750 грн.</li>
<li>Долив гидравлической жидкости сцепления	от 23 грн.</li>
<li>Замена рабочего цилиндра сцепления	от 625 грн.</li>
<li>Замена тросика сцепления	от 285 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingTransmission">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTransmission" aria-expanded="false" aria-controls="collapseTransmission">
        Трансмиссия        </button>
      </h5>
    </div>
    <div id="collapseTransmission" class="collapse" aria-labelledby="headingTransmission" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
        <li>Диагностика трансмиссии	–</li>
    <li>Замена МКПП	от 910 грн.</li>
    <li>Замена масла АКПП	от 143 грн.</li>
    <li>Замена масла МКПП	от 143 грн.</li>
    <li>Замена полуоси	от 285 грн.</li>
    <li>Замена пыльника ШРУС	от 343 грн.</li>
    <li>Замена ШРУС	от 313 грн.</li>
    <li>Замена масла в элементах трансмиссии	от 143 грн.</li>
    <li>Замена сальников полуоси	от 285 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingClimat">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseClimat" aria-expanded="false" aria-controls="collapseClimat">
        Климат-контроль        </button>
      </h5>
    </div>
    <div id="collapseClimat" class="collapse" aria-labelledby="headingClimat" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
          <li>Заправка кондиционера	от 547 грн.</li>
          <li>Ремонт компрессора	от 625 грн.</li>
          <li>Замена компрессора	от 750 грн.</li>
        </ul>      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingGBO">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseGBO" aria-expanded="false" aria-controls="collapseGBO">
        ГБО        </button>
      </h5>
    </div>
    <div id="collapseGBO" class="collapse" aria-labelledby="headingGBO" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
        <li>Установка газобаллонного оборудования	от 2 718 грн.</li>
        <li>Диагностика системы ГБО	от 391 грн.</li>
        <li>Техническое обслуживание газобаллонного оборудования	от 435 грн.</li>
        <li>Настройка и регулировка газобаллонного оборудования	от 391 грн.</li>

        </ul>      </div>
    </div>
  </div>

</div>

      





        <h3>
          
        </h3>

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
