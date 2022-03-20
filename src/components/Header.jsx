import React from 'react';
import '../styles/Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__left'>
                <img className='header__logo' width={40} height={40} src='/img/logo.png' alt="logo"/>
                <div>
                    <h4 className='header__title'>REACT SNEAKERS</h4>
                    <span className='header__subtitle'>Магазин лучших кроссовок</span>
                </div>
            </div>
            <ul className='header__right'>
                <li>
                    <img src="/img/cart.svg" alt=""/>
                    <span className='header__totalPrice'>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/heart.svg" alt=""/>
                </li>
                <li>
                    <img src="/img/user.svg" alt=""/>
                </li>
            </ul>
        </header>
    );
};

export default Header;