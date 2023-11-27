import React, { useEffect, useRef, useState } from "react";
import { getProductById, currency } from "home/products";
import { useParams } from "react-router-dom";
import placeAddToCart from 'addtocart/placeAddToCart'
const PDPContent = () => {
  const [Product, setProduct] = useState(null);
  const { id } = useParams();

  const addToCart =useRef(null)
  
  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, []);

  useEffect(() => {
     if (addToCart.current) {
      placeAddToCart(addToCart.current , Product.id)
     }
  }, [Product])
  

  if (!Product) {
    return null;
  }


  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <img src={Product.image} alt={Product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{Product.name}</h1>
          <div className="font-bold text-3xl flex-grow">
            {currency.format(Product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-4">{Product.description}</div>
        <div className="mt-4">{Product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
