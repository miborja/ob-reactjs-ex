import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EstadoContacto = (props) => {

    const [estadoActual, cambiaEstado] = useState(props.connected);

    return (
        <div>
            <span className='titulo'>Estado : </span>
            <span id="estadoContacto" className='datos'> { estadoActual ? 'Contacto En Línea' : 'Contacto No Disponible' } </span>
            <p>
                <button onClick={() => {
                    cambiaEstado(estadoActual => !estadoActual);
                }
                }
                >
                Cambiar Estado
                </button>
            </p>
        </div >
    );
};

EstadoContacto.propTypes = {
    connected: PropTypes.bool
};


export default EstadoContacto;
