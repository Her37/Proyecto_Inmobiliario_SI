import '../styles/home.css';
import ReactPlayer from 'react-player';
import React from "react";
import Filtro from '../componentes/Filtro';


export const Home = (props) => {

    return (
        <main>
            <div className="inicio">
                <div className="sub_fondo">
                    <Filtro />
                    <img className="fondo" src="../../../img/home/Home.jpg" alt="" />
                </div>
            </div>
            <div className="holder">
                <div className="columnas">
                    <section className="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <br />
                        <p><b>Bienvenidos, este sitio consiste en una plataforma de intercambios <i>sin intermediarios</i>.
                            Donde las personas podrán intercambiar libremente lo que deseen. Para ello, en un futuro
                            implementaremos el uso de la tecnología de contratos inteligentes o SmartContracts, pero
                            actualmente no se encuentra disponible ya que estamos trabajando en su implementación.</b></p>
                        <br />
                        <p><b>Por el contrario, podrás consultar y ponerte en contacto con los distintos ofertantes del sitio a
                            través de correo electrónico o teléfono y pactar la forma de intercambio que desees. Ten en
                            cuenta que no se permitirá publicar artículos sin su debida documentación, como ser: título,
                            certificados, factura, etc. ni tampoco ningún artículo prohibido por las leyes actuales.</b></p>
                        <br />
                        <p><b>Si lo deseas, te invito a que te des una vuelta por el sitio y me dejes una opinión en los
                            comentarios. ¡Saludos!</b></p>
                        <br />
                        <hr />

                        <section>
                            <p>
                                <i>Si quieres saber mas sobre que son los <b>Contratos Inteligentes</b>, te comparto esta nota de <span>Bit2me</span>: <a
                                    href="https://academy.bit2me.com/que-son-los-smart-contracts/">Que son los smart
                                    contracts?</a></i>
                            </p>
                            <ReactPlayer url={('https://www.youtube.com/watch?v=4ZnYGLWVpXk')} />
                        </section>
                    </section>
                    <section className="testimonios">
                        <h2>Comentarios</h2>
                        <br />
                        <div className="testimonio">
                            <span className="cita">"Muy serios y profesionales."</span>
                            <span className="autor">Pablo R.</span>
                        </div>
                        <br />
                        <div className="testimonio">
                            <span className="cita">"Excelente iniciativa!"</span>
                            <span className="autor">Gaston</span>
                        </div>

                        
                    </section>
                </div>
            </div>

        </main>
    );
}

export default Home;


