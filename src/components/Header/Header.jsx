import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import css from './Header.module.css'
import Order from "components/Order/Order";

const showOrders = (props) => {
    let price = 0;
    props.orders.forEach(el => price += Number.parseFloat(el.price));
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className={css.price}>Price: {new Intl.NumberFormat().format(price)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className={css.empty}>
            <h2>No products</h2>
        </div>
    )
}

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className={css.logo}>House staff</span>
                <ul className={css.nav}>
                    <li className={css.nav_items}>About us</li>
                    <li className={css.nav_items}>Contacts</li>
                    <li className={css.nav_items}>Office</li>
                </ul>
                <FaShoppingBasket
                    onClick={() => setCartOpen(!cartOpen)}
                    className={`${css.shop_button} ${cartOpen ? css.active : ''}`}
                />

                {cartOpen && (
                    <div className={css.shop_cart}>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className={css.presentation}></div>
        </header>
    )
}
