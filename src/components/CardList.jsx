import React from "react";
import Card from "./Card";

const CardList = ({ filteredProducts, addToCart }) => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {filteredProducts.map((product) => {
        return (
          <Card key={product.id} product={product} addToCart={addToCart} />
        );
      })}
    </div>
  );
};

export default CardList;
