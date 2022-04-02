import React, {useState} from "react";
import "../styles/Cart.css";
import DataService from "../api/DataService";

const Cart = ({isCartOpen, closeCart, cartItems}) => {
    const [isBougth, setIsBougth] = useState(false)

    const rootClass = ["overlay"];
    if (isCartOpen) {
        rootClass.push("open");
    }
    const removeItem = (id) => {
        DataService.removeItem(id);
    };

    const successfullyOrder = () => {
        DataService.clearCart()
        setIsBougth(false)
        closeCart(false)
    }

    return (
        <div
            className={rootClass.join(" ") + " " + "transition-all"}
            onClick={() => closeCart(false)}
        >
            <div
                className="flex flex-col bg-white w-385 h-screen absolute right-0 top-0 bottom-0 p-7"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-7">Корзина</h2>
                {isBougth ? <div className='flex flex-1 items-center justify-center'>
                        <div className='text-center'>
                            <img className='mb-[20px] mx-auto' width={120} height={120} src="/img/complete-order.jpg"
                                 alt=""/>
                            <h4 className='font-semibold mb-[10px] text-[22px] text-[#87C20A]'>Заказ оформлен!</h4>
                            <p className='w-[285px] mx-auto text-black opacity-[0.5] mb-[40px]'>Ваш заказ #18 скоро будет
                                передан курьерской доставке</p>
                            <button onClick={successfullyOrder} className='toback'>
                                <img className='toback-icon' src="/img/arrow.svg" alt=""/>
                                <span>Вернуться назад</span>
                            </button>
                        </div>
                    </div>
                    : cartItems.length
                        ? <>
                            <ul className="flex-1 overflow-y-auto mb-3">
                                {cartItems.length !== 0 &&
                                    cartItems.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            cartItems={cartItems}
                                            removeItem={removeItem}
                                            product={item}
                                        />
                                    ))}

                            </ul>
                            <div className="mb-6">
                                <div className="flex">
                                    <p>Итого: </p>
                                    <span className="flex-1 border-b border-b-gray border-dashed mx-2 mb-1"></span>
                                    <b>
                                        {cartItems.reduce((sum, item) => {
                                            return sum += item.price;
                                        }, 0)}{" "}
                                        руб.
                                    </b>
                                </div>
                                <div className="flex">
                                    <p>Налог 5%: </p>
                                    <span className="flex-1 border-b border-b-gray border-dashed mx-2 mb-1"></span>
                                    <b>1074 руб. </b>
                                </div>
                            </div>
                            <button onClick={() => {
                                DataService.buyItems({
                                    date: new Date().toLocaleTimeString(),
                                    items: cartItems
                                })
                                setIsBougth(true)
                            }}
                                    className="py-4 bg-send rounded-2xl relative text-white font-bold active:bg-green-700  transition-colors">
                                <span>Оформить заказ </span>
                                <img
                                    className="absolute top-5 right-7 "
                                    src="/img/arrow.svg"
                                    alt=""
                                />
                            </button>
                        </>
                        : <div className='flex flex-1 items-center justify-center'>
                            <div className='text-center'>
                                <img className='mb-[20px] mx-auto' width={120} height={120} src="/img/empty-cart.jpg"
                                     alt=""/>
                                <h4 className='font-semibold mb-[10px] text-[22px]'>Корзина пустая</h4>
                                <p className='w-[285px] mx-auto text-black opacity-[0.5] mb-[40px]'>Добавьте хотя бы
                                    одну
                                    пару кроссовок, чтобы сделать заказ.</p>
                                <button onClick={() => closeCart(false)}
                                        className='toback'>
                                    <img className='toback-icon' src="/img/arrow.svg" alt=""/>
                                    <span>Вернуться назад</span>
                                </button>
                            </div>
                        </div>}

            </div>
        </div>
    );
};

const CartItem = ({product, removeItem}) => {
    return (
        <li className="flex justify-between p-5 items-center border rounded-2xl mb-5 border-lightgray">
            <img className="w-16 h-16" src={product.image} alt="sneaker"/>
            <div className="w-150">
                <p>{product.text}</p>
                <b>{product.price} руб.</b>
            </div>
            <button
                onClick={() => {
                    removeItem(product.id);
                }}
            >
                <img src="/img/btn-remove.svg" alt=""/>
            </button>
        </li>
    );
};

export default Cart;
