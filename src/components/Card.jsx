import React, { useState } from "react";

const Card = ({ product, addToCart }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="favorite">
        <img
          onClick={() => setIsLiked(!isLiked)}
          src={isLiked ? "/img/liked.svg" : "/img/unliked.svg"}
          alt=""
        />
      </div>
      <img className="w-32 h-28 mb-4 mx-auto" src={product.image} alt="" />
      <p className="text-sm mb-4 flex-1">{product.text}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="uppercase text-xs text-lightgray block leading-3">
            ЦЕНА:
          </span>
          <span className="font-bold text-sm leading-4">
            {product.price} руб.
          </span>
        </div>
        <button
          onClick={() => {
            setIsChecked(true);
            addToCart(product);
          }}
        >
          <img src="/img/btn-plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
