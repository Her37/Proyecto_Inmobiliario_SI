import React from 'react';
import '../styles/nosotros.css';

const Nosotros = (props) => {
return (

<main className="holder">

    <div className="historia">
        <h2>Historia</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque provident cum ut, aspernatur ea
            eius praesentium accusamus, doloremque optio incidunt eligendi obcaecati officia sint adipisci quidem
            atque odit? Aliquid?
        </p>
        <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora unde vitae reiciendis quas
            eaque quos, suscipit nemo magnam, repellendus deserunt modi laudantium libero! Voluptas alias
            praesentium deserunt veritatis aliquid consequatur.
        </p>
        <br></br>
    </div>
    <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
            <div className="persona">
                <img src="img/nosotros/imagen1.jpeg" alt="" />
                <h5>Hernan</h5>
                <h6>Gerente Gral</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>
            <div className="persona">
                <img src="img/nosotros/images2.jpg" alt="" />
                <h5>Carlos</h5>
                <h6>sub Gerente</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>

            <div className="persona">
                <img src="img/nosotros/imagen3.jpg"
                    alt="" />
                <h5>Romina</h5>
                <h6>Gerente de Compras</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>

            <div className="persona">
                <img src="img/nosotros/imagen4.jpg"
                    alt="" />
                <h5>Alejandro</h5>
                <h6>Gerente de Marketin</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>
            <div className="persona">
                <img src="img/nosotros/imagen5.jpg"
                    alt="" />
                <h5>Griselda</h5>
                <h6>Gerente de Logistica</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>
        </div>
    </div>
</main>
);
}

export default Nosotros;