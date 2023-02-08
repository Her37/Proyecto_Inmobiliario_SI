import { useNavigate } from "react-router-dom";
import { productos } from "../data";
import React, { useState } from "react";


const Filtro = (props) => {
    const [lugar, setLugar] = useState(props.lugar || "");
    const [condicion, setCondicion] = useState(props.condicion || "");
    const [tipo, setTipo] = useState(props.tipo || "");

    const navigate = useNavigate();

    const lugares = [
        ...new Set(productos.map((producto) => producto.lugar))
    ];
    const condiciones = [
        ...new Set(productos.map((producto) => producto.condicion))
    ];
    const tipos = [
        ...new Set(productos.map((producto) => producto.tipo))
    ];

    return (
        <div id="caja">
            <div id='botonera'>
                <button className="button" onClick={() =>
                    navigate(`/galeria?lugar=${lugar}&condicion=${condicion}&tipo=${tipo}`)
                }>BUSCAR</button>
                <select className="form-select button " aria-label="Default select example" value={lugar}
                    onChange={(e) => setLugar(e.target.value)}>
                    <option value="" >Lugar</option>
                    {lugares.map((lugar) => (
                        <option value={lugar}>{lugar}</option>
                    ))}
                </select>
                <select className="form-select button " aria-label="Default select example" value={condicion}
                    onChange={(e) => setCondicion(e.target.value)}>
                    <option value="" >Condicion</option>
                    {condiciones.map((condicion) => (
                        <option value={condicion}>{condicion}</option>
                    ))}
                </select>
                <select className="form-select button " aria-label="Default select example" value={tipo}
                    onChange={(e) => setTipo(e.target.value)}>
                    <option value="" >Tipo</option>
                    {tipos.map((tipo) => (
                        <option value={tipo}>{tipo}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filtro;