import React from "react";
import {Link} from "react-router-dom";

const Header = ({ setIsCartOpen }) => {
  return (
    <header className="flex p-11 items-center justify-between border-b border-b-lightgray">
      <div className="flex items-center">
        <img className="mr-4 w-10 h-10" src="/img/logo.png" alt="logo" />
        <div>
          <h4 className="font-bold text-xl leading-5 ">REACT SNEAKERS</h4>
          <span className="text-sm text-gray">Магазин лучших кроссовок</span>
        </div>
      </div>
      <ul className="flex items-center">
        <li
          className="flex items-center mr-8"
          onClick={() => setIsCartOpen(true)}
        >
          <img className="mr-2.5" src="/img/cart.svg" alt="" />
          <span className="font-semibold text-darkgray">1205 руб.</span>
        </li>
        <li className="mr-8">
          <Link to='/favorites'>
            <img src="/img/heart.svg" alt="" />
          </Link>
        </li>
        <li>
          <img src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
