import React, { Component } from 'react';
import EstadoContacto from './estadoContacto';
import '../css/contacto.css';

class Contacto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Antonio",
            surname: "Pérez García",
            email: "correo@gmail.com",
            connected: false
        }
    }

    render() {
        return (
            <div className='datosContacto'>
                <ul>
                    <li><span className='titulo'>Nombre: </span> <span className='datos'> { this.state.name } </span> </li>
                    <li><span className='titulo'>Apellidos : </span> <span className='datos'> { this.state.surname } </span></li>
                    <li><span className='titulo'>Email : </span> <span className='datos'> { this.state.email } </span> </li>
                    <li>
                        <EstadoContacto connected={this.state.connected}></EstadoContacto>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Contacto;
