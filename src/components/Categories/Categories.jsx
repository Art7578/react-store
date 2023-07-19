import React, { Component } from 'react';
import css from './Categories.module.css';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'sofa',
                    name: 'Sofa'
                },
                {
                    key: 'chair',
                    name: 'Chair'
                },
                {
                    key: 'bed',
                    name: 'Bed'
                },
                {
                    key: 'furniture',
                    name: 'Furniture'
                },
            ]
        }
    }
    render() {
        return (
            <ul className={css.categories}>
                {this.state.categories.map(el => (
                    <li className={css.categories_items} key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</li>
                ))}
            </ul>
        )
    }
}

export default Categories;