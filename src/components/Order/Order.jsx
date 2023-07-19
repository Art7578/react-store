import { Component } from "react";
import React from "react";
import { FaTrash } from "react-icons/fa";
import css from './Order.module.css';

export class Order extends Component {
    render() {
        return (
            <div className={css.item}>
                <img className={css.image} src={this.props.item.imge} alt=" "/>
                <h2 className={css.name}>{this.props.item.name}</h2>
                <b className={css.price}>{this.props.item.price} $</b>
                <FaTrash className={css.delete_icon} onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order;