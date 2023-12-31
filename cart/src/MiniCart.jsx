import React, { Fragment, useEffect, useState } from "react";
import { cart, clearCart } from "./cart";
import { currency } from "home/products";
const MiniCart = () => {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span id="showcart_span" onClick={() => setShowCart(!showCart)}>
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-200"
            style={{
              width: 300,
              top: "2rem",
              left:-250
            }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} />
                  <div>{item.name}</div>
                  <div className="text-right">
                    {currency.format(item.quantity * item.price)}
                  </div>
                </Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div>
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <button
                  className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button
                className="bg-green-900 text-white py-2 px-5 rounded"
                onClick={clearCart}
                >
                    Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MiniCart;
