import '../styles/contacto.css'
import React, { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.date.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">

            <div className="recuadro">
                <h2>Contacto</h2>

                <form action="/contacto" method="post" target="_blank" autocomplete="on" class="formulario" onSubmit={handleSubmit}>
                    <p>
                        <input type="text" id="nom" name="nombre" placeholder="Nombre" size="55" maxLength="40" value={formData.nombre} onChange={handleChange} />
                        <br />
                        <br />
                    </p>
                    <p>
                        <input type="text" id="ape" name="email" placeholder="Email" size="55" maxLength="40" value={formData.email} onChange={handleChange} />
                        <br />
                        <br />
                    </p>
                    <p>
                        <input type="text" id="tel" name="telefono" placeholder="Telefono" size="55" maxLength="40" value={formData.telefono} onChange={handleChange} />
                        <br />
                        <br />
                    </p>
                    <p>
                        <textarea name="mensaje" id="com" cols="50" rows="10" placeholder="Comentarios" value={formData.mensaje} onChange={handleChange}>
                        </textarea>
                        <br />
                        <br />
                    </p>
                    <p class="botones">
                        <input type="submit" name="Enviar" value="Enviar" onClick="alert('Gracias por tu consulta. Te responderemos a la brevedad')" />
                        <input type="reset" value="Borrar" onClick="alert('Todo Limpio!')" />
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>

            </div>
            <div class="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien pueden contactarse con osotros usando los siguientes medios</p>
                <ul>
                    <li> Telefono: +54 11 2832-6768</li>
                    <li>Email: carrizo_h@yahoo.com.ar</li>
                    <li>Instagram: Her_35</li>
                    <li>Twtter: Hernan Carrizo</li>
                    <li>Sype:</li>
                </ul>
            </div>
        </main>
    );
};



export default Contacto;