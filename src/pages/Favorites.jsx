import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Favorites = () => {
    const [favoritesItems, setFavoritesItems] = useState([])
    useEffect(() => {

    })
    return (
        <div className='content'>
            <div className='flex items-center'>
                <Link to='/' className='mr-[20px]'>
                    <img src="/img/back.svg" alt=""/>
                </Link>
                <h1 className='title'>Мои закладки</h1>
            </div>

            {favoritesItems.length
                ? <div className="grid grid-cols-4 gap-[40px]">

                </div>
                : <div className='flex items-center max-w-[290px] mx-auto'>
                    <h3 className="font-semibold text-[24px] leading-[29px]">Закладок нет :(</h3>
                </div>}

        </div>
    );
};

export default Favorites;