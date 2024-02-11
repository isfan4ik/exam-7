import React from 'react'
import './main.css'
import star from '../img/star.png'
import compare from '../img/compare.png'
import shoppingcart from '../img/shoppingcart.png'
import search  from '../img/search.png'
import user from '../img/user.png'
import list from '../img/list.png'
import time from '../img/time.png'
import placeholder from '../img/placeholder.png'
import product from '../img/product.png'
import and from '../img/product.png'
import logo from '../img/logo.png'
import fake from '../img/fake.png'
import photo from '../img/photo.png'
import orig from '../img/orig.png'
import './Footer.scss'

export default function HomePage() {
    
  return (
    <div>
      <div className='header'>
      <div className="container">
      <div className="nav">
        <img src={logo} alt="Fotoprokat24" className="logo" />
        <ul className="menu">
          <li><a href="#">Каталог</a></li>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Правила</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <div className="bar">
          <img src={star} alt="Fotoprokat24" className="logo" />
          <img src={compare} alt="Fotoprokat24" className="logo" />
          <img src={shoppingcart} alt="Fotoprokat24" className="logo" />
          <img src={search} alt="Fotoprokat24" className="logo" />
          <img src={user} alt="Fotoprokat24" className="logo" />

          <li   className='nav-item'>
          <a  className='nav-link' href="/basket">Basket</a>
         </li>
         <li   className='nav-item'>
          <a  className='nav-link1' href="./login/loginform">Login</a>
         </li>

        </div>
      </div>
      <div className="banner">
        <div className="textarea"></div>
        <img className="greenBg" src="img/bg.png" alt="" />
        <div className="wrap">
          <p className="text">
            <span>Аренда</span>  Фото <br />
            И видео <br />
            оборудования
          </p>
        </div>
      </div>
    </div>
      </div> 
      <section className="about">
      <div className="container">
        <div className="items">
          <div className="item">
            <img src={list} alt="list" />
            <p>Самый большой <br /> выбор техники</p>
          </div>
          <div className="item">
            <img src={time} alt="time" />
            <p>Быстрое <br /> оформление заказа</p>
          </div>
          <div className="item">
            <img src={placeholder} alt="placeholder" />
            <p>Можно забрать заказ<br /> в пункте выдачи</p>
          </div>
          <div className="item">
            <img src={product} alt="product" />
            <p>Доставка в любую<br /> точку Москвы</p>
          </div>
          <div className="item">
            <img src={and} alt="commerce-and-shopping" />
            <p>Оплата картой<br /> и наличными</p>
          </div>
        </div>
      </div>
    </section>
    <div>
    <section className="popularProducts">
      <div className="container">
        <div>
          <p className="mainTitle">Популярные товары</p>
        </div>
        <div className="product">
          <div className="camera">
            <img className="camera1" src={photo} alt="photo" />
            <img className="icon" src={compare} alt="" />
            <img className="icon" src={star} alt="" />
            <p className="title">PowerShot SX620 HS</p>
            <p className="subtitle">Canon</p>
          </div>
          <div className="price">
            <div className="sum">
              <p className="value">630 Р</p>
              <p className="time">Будний</p>
            </div>
            <div className="sum">
              <p className="value">750 Р</p>
              <p className="time">Выходной</p>
            </div>
            <div className="sum">
              <p className="value">4 380 Р</p>
              <p className="time">Неделя</p>
            </div>
            <div className="sum">
              <p className="value">12 250 Р</p>
              <p className="time">Месяц</p>
            </div>
          </div>
          <div className="buttons">
            <button className="details" type="button">Подробнее</button>
            <button className="buy">В корзину</button>
          </div>
        </div>
        <div className="product">
          <div className="camera">
            <img className="camera2" src={fake} alt="" />
            <img className="icon" src={compare} alt="" />
            <img className="icon" src={star} alt="" />
            <p className="title">PowerShot SX620 HS</p>
            <p className="subtitle">Canon</p>
          </div>
          <div className="price">
            <div className="sum">
              <p className="value">630 Р</p>
              <p className="time">Будний</p>
            </div>
            <div className="sum">
              <p className="value">750 Р</p>
              <p className="time">Выходной</p>
            </div>
            <div className="sum">
              <p className="value">4 380 Р</p>
              <p className="time">Неделя</p>
            </div>
            <div className="sum">
              <p className="value">12 250 Р</p>
              <p className="time">Месяц</p>
            </div>
          </div>
          <div className="buttons">
            <button className="details" type="button">Подробнее</button>
            <button className="buy">В корзину</button>
          </div>
        </div>
        <div className="product">
          <div className="camera">
            <img className="camera3" src={orig} alt="" />
            <img className="icon" src={compare} alt="" />
            <img className="icon" src={star} alt="" />
            <p className="title">PowerShot SX620 HS</p>
            <p className="subtitle">Canon</p>
          </div>
          <div className="price">
            <div className="sum">
              <p className="value">630 Р</p>
              <p className="time">Будний</p>
            </div>
            <div className="sum">
              <p className="value">750 Р</p>
              <p className="time">Выходной</p>
            </div>
            <div className="sum">
              <p className="value">4 380 Р</p>
              <p className="time">Неделя</p>
            </div>
            <div className="sum">
              <p className="value">12 250 Р</p>
              <p className="time">Месяц</p>
            </div>
          </div>
          <div className="buttons">
            <button className="details" type="button">Подробнее</button>
            <button className="buy">В корзину</button>
          </div>
        </div>
      </div>
    </section>
    <footer className='footer'>
            <div className="footer__content container">
                <ul className="first__block">
                    <li><a href="./index.html"><img src="img/general/logo.svg" alt="Fotoprokat24" /></a></li>
                    <li className="first"><a href="#">самый удобный в Москве сервис аренды</a></li>
                    <li>&copy; 2015-2019 Fotoprokat24</li>
                    <li>
                        <div className="sm-icons">
                            <img src="img/footerImg/facebook.png" alt="facebook" />
                            <img src="img/footerImg/twitter.png" alt="twitter" />
                            <img src="img/footerImg/vkontakte.png" alt="vkontakte" />
                            <img src="img/footerImg/youtube.png" alt="youtube" />
                            <img src="img/footerImg/instagram.png" alt="instagram" />
                        </div>
                    </li>
                </ul>
                <div className="sm-icons2">
                    <img src="img/footerImg/facebook.png" alt="facebook" />
                    <img src="img/footerImg/twitter.png" alt="twitter" />
                    <img src="img/footerImg/vkontakte.png" alt="vkontakte" />
                    <img src="img/footerImg/youtube.png" alt="youtube" />
                    <img src="img/footerImg/instagram.png" alt="instagram" />
                </div>
                <ul>
                    <li className="beginner">Компании</li>
                    <li>O компании</li>
                    <li>Новости</li>
                    <li>Ваканции</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <ul>
                    <li className="beginner">Клиентам</li>
                    <li>Точки выдачи</li>
                    <li>Скидки</li>
                    <li>Бонусные программы</li>
                </ul>
                <ul>
                    <li className="beginner">Помощь</li>
                    <li>Вопрос-ответы</li>
                    <li>Правила аренды</li>
                    <li>Доставка</li>
                    <li>Оплаты</li>
                </ul>
                <ul>
                    <li className="beginner">Контакты</li>
                    <li>Fotoprokat24</li>
                    <li>г.Москва, Проспект мира, дом 12.</li>
                    <li>Пн-Вс 9:00-21:00</li>
                    <li>+7(999) 999 - 99 - 99</li>
                    <li>
                        <section>
                            <img src="img/footerImg/visa.svg" alt="visa" />
                            <img src="img/footerImg/mastercard.svg" alt="mastercard" />
                            <img src="img/footerImg/robokassa.svg" alt="robokassa" />
                        </section>
                    </li>
                </ul>
                <section className="cardsBank">
                    <img src="img/footerImg/visa.svg" alt="visa" />
                    <img src="img/footerImg/mastercard.svg" alt="mastercard" />
                    <img src="img/footerImg/robokassa.svg" alt="robokassa" />
                </section>
            </div>
        </footer>


    </div>
    </div>
);
}

