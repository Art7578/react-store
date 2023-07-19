import Item from "../Item/Item";
import React, {Component} from "react";
import css from './Items.module.css'

export class Items extends Component {
    render() {
        return (
            <main className={css.main}>
                {this.props.items
                .map(el => (
                    <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
                ))}
            </main>
        )
    }
}

export default Items;