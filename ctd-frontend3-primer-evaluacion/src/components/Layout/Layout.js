import React, { Component } from "react";
import Historia from "../Historia/Historia";
import Historial from "../Historial/Historial";
import Opciones from "../Opciones/Opciones";
import data from "../data.json";
import Swal from "sweetalert2";
import style from "./Layout.module.css";

export default class Layout extends Component {
    state = {
        opcionesElegidas: [],
        historiaActual: data[0],
    };

    componentDidMount = () => {
        const alerta = {
            title: "&#128164 Elige tu propia aventura &#127794",
            confirmButtonColor: "#0569",
        };
        Swal.fire(alerta);
    };

    handleClick = (opcion) => {

        const llegoAlFinal = this.state.opcionesElegidas.length === this.props.limiteHistorias - 1;
        if (llegoAlFinal) this.reiniciar();

        else {
            this.setState(
                { opcionesElegidas: [...this.state.opcionesElegidas, opcion] },
                () => {
                    const historia = this.obtenerHistoriaSegunOpcion(opcion);
                    if (historia !== null) {
                        this.setState({
                            historiaActual: historia,
                        });
                    }
                }
            );
        }
    };

    reiniciar = () => {
        const confirmar = {
            title: "Terminó la historia,¿Empezamos de nuevo?",
            showCancelButton: true,
            confirmButtonColor: "#0569",
            cancelButtonColor: "#b6b6b6",
            confirmButtonText: "Si",
            cancelButtonText: "No",
        };
        Swal.fire(confirmar)
            .then((result) => {
                if (result.isConfirmed) {
                    this.setState({ opcionesElegidas: [], historiaActual: data[0] });
                }
            });
    }

    obtenerHistoriaSegunOpcion = (opcion) => {
        const { opcionesElegidas } = this.state;
        const opcionParseada = opcionesElegidas.length + 1 + opcion.toLowerCase();
        return data.find((d) => d.id === opcionParseada);
    };

    render() {
        const { historiaActual, opcionesElegidas } = this.state;
        return (
            <div className={style.layout}>
                <Historia texto={historiaActual.historia} />
                <Opciones
                    handleClick={this.handleClick}
                    opcionA={historiaActual.opciones.a}
                    opcionB={historiaActual.opciones.b}
                />
                <Historial opcionesElegidas={opcionesElegidas} />
            </div>
        );
    }
}