import React, {
    Component
} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        pokemon: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('pokemon/');

        this.setState({ pokemon: response.data.results });

        console.log(response.data.results);
    };
    
    render() {
        const {pokemon} = this.state;

        return (
            <div className="product-list">
                {pokemon.map(product => (
                    <article key={product.id}>
                        <strong>{product.name}</strong>
                        <p>{product.url}</p>

                    </article>
                ))}
            </div>
        )
    }

}