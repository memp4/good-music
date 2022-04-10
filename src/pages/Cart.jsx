import React from "react";
import { CartItem } from "../components";
import { useSelector } from "react-redux";

const selectCartItems = state => state.cart;

const Cart = () => {
    const cartItemsFromStore = useSelector(selectCartItems);
    const cartItemsToRender = cartItemsFromStore.map(({ img, title, artist, price }, index) => (
        <CartItem
            key={`${title}_${index}`}
            img={img}
            title={title}
            artist={artist}
            price={price}
        />
    ));
    const emptyCart = cartItemsToRender.length === 0 ? <p className="empty-cart">Your cart is empty</p> : <></>

    return (
        <main className="cart">
            <h1 className="page-name">Cart</h1>
            {emptyCart}
            <div className="cart-list">
                {cartItemsToRender}
            </div>
        </main>
    );
}

export default Cart