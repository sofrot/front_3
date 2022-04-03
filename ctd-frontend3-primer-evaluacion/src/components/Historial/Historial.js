import React, { Component } from 'react';
import style from "./Historial.module.css";

export default class Historial extends Component {
    render() {
        const { opcionesElegidas } = this.props;
        const ultimaOpcionElegida = opcionesElegidas[opcionesElegidas.length - 1];
        return (
            <div className={style.historial}>
                <h3>Selección anterior: {ultimaOpcionElegida}</h3>
                <ul>{opcionesElegidas.map((opcion, i) => <li key={i}>{opcion}</li>)}</ul>
            </div>
        );
    }
}