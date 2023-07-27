import React from "react";
import "./Product.css";
import { useStateValue } from "../dataLayer/StateProvider";

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();
    // console.log("dispatch func ",dispatch); //return dispatch funcs
    console.log("state.backet", state.basket);
    const addToBasket = () => {

        dispatch({
            type: "addToBasket",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }

        })

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
