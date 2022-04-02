import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import DataService from "./api/DataService";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(async () => {
        DataService.getCartItems(setCartItems);
    }, []);

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Cart
                    isCartOpen={isCartOpen}
                    closeCart={setIsCartOpen}
                    cartItems={cartItems}
                />
                <div className="body">
                    <Header setIsCartOpen={setIsCartOpen}/>
                    <Routes>
                        <Route path='/' element={<Products/>} exact/>
                        <Route path='/favorites' element={<Favorites/>} exact/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
