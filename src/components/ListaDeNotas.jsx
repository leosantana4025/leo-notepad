import React, { Component } from 'react';
import Card from './Card';

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {
                    Array.of("Trabalho", "Estudo", "Lazer").map(categoria => {
                        return (
                            <li>
                                <div>{ categoria }</div>
                                <Card />
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
}

export default ListaDeNotas;
