import React, { Component } from 'react';
import style from "./Historia.module.css";
export default class Historia extends Component {
    render(){
        return (
            <h1 className={style.historia}>{this.props.texto}</h1>
        )
    }
}