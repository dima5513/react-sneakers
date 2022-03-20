import React from 'react';
import './styles/index.scss'
import Header from "./components/Header";

function App() {
    return (
        <div className='wrapper'>
          <Header/>
            <main className='content'>
                <h1 className='content__title'>Все кроссовки</h1>
                <div className='card__list'>
                    <div className="card">
                        <img className='card__img' src="/img/sneakers/1.jpg" alt=""/>
                        <p className='card__description'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div>
                            <div className='card__details'>
                                <span className='card__symbol'>ЦЕНА:</span>
                                <span className='card__price'>12 999 руб.</span>
                            </div>
                            <button className='card__btn'>
                                <img src="/img/btn-plus.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
