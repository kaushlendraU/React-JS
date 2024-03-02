import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
};

export const CartProvider = (props) => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [items, setItems] = useState(storedItems);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(items));
    }, [items]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    );
};
