import React, {Component} from "react";
import css from './ShowFullItem.module.css';

export class ShowFullItem extends Component {
    render() {
        return(
            <div className={css.full_item}>
                <div className={css.show_item}>
                    <img className={css.image} src={this.props.item.imge} alt="" onClick={() => this.props.onShowItem(this.props.item)}/>
                    <h2 className={css.name}>{this.props.item.name}</h2>
                    <p className={css.text}>{this.props.item.desc}</p>
                    <b className={css.price}>{this.props.item.price}</b>
                    <div className={css.add_to_cart} onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem;