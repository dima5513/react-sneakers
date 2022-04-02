import React, {useEffect, useMemo, useState} from 'react';
import CardList from "../components/CardList";
import CardsTemplate from "../components/CardsTemplate";
import DataService from "../api/DataService";

const Products = () => {

    const [products, setProducts] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(async () => {
        const data = await DataService.getProducts();
        setProducts(data);
    }, []);


    const filteredProducts = useMemo(() => {
        return (
            products &&
            products.filter((item) =>
                item.text.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, products]);

    const addToCart = (obj) => {
        try {
            DataService.addToCart(obj);
        } catch (error) {
            alert(error.message);
        }
    };



    return (
        <main className="content">

            {products ? (
                <>
                    <div className="flex justify-between mb-8">
                        <h1 className="title">Все кроссовки</h1>
                        <div className="relative py-3 pl-11 w-250 border border-neutral-200 rounded-xl">
                            <img
                                className="absolute top-5 left-4"
                                src="/img/search.svg"
                                alt=""
                            />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="text-lightgray placeholder:text-lightgray outline-none border-none"
                                type="text"
                                placeholder="Поиск..."
                            />
                        </div>
                    </div>
                    <CardList
                        filteredProducts={filteredProducts}
                        addToCart={addToCart}
                    />
                </>

            ) : (
                <CardsTemplate/>
            )}
        </main>
    );
};

export default Products;