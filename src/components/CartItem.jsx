import React from 'react';

const CartItem = ({ img, title, artist, price }) => {
    return (
        <div className="cart-item">
            <img src={process.env.PUBLIC_URL + "/img/" + img} alt="item" height="80px" />
            <span className="cart-item-info">
                <p className="cart-item-title">{title}</p>
                <p className="cart-item-artist">{artist}</p>
                <p className="cart-item-price">Price: {price}</p>
            </span>
        </div>
    );
};

export default CartItem;