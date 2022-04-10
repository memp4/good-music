import React from "react";

const Cart = () => {
    return (
        <main className="cart">
            <h1 className="page-name">Cart</h1>
            <p className="empty-cart">Your cart is empty</p>
            <div className="cart-list">
                <div className="cart-item">
                    <img src="/" alt="item" height="35px"/>
                    <span className="cart-item-info">
                        <p className="cart-item-title">Album name</p>
                        <p className="cart-item-artist">Artist name</p>
                        <p className="cart-item-format">Format</p>
                        <p className="cart-item-price">price</p>
                    </span>
                </div>
            </div>
        </main>
    );
}

export default Cart