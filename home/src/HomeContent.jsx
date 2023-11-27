import React, { useEffect, useState } from "react";
import { currency, getProducts } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";
const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {Products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a href="">{product.name}</a>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700"
                onClick={() => addToCart(product.id)}
                id={`adtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
