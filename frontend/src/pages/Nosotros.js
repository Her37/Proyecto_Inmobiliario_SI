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
                <img src="img/nosotros/WhatsApp Image 2022-11-04 at 12.01.59 PM.jpeg" alt="" />
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
                <img src="img/nosotros/images.png" alt="" />
                <h5>BOB</h5>
                <h6>sub Gerente</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>

            <div className="persona">
                <img src="img/nosotros/png-transparent-squidward-raising-hands-illustration-squidward-tentacles-plankton-and-karen-drawing-mr-krabs-squid-miscellaneous-pencil-whirly-brains.png"
                    alt="" />
                <h5>BOB</h5>
                <h6>Gerente de Compras</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>

            <div className="persona">
                <img src="img/nosotros/png-clipart-bart-simpson-drawing-art-graphy-vexel-sketch-bart-simpson-miscellaneous-hand.png"
                    alt="" />
                <h5>Bart</h5>
                <h6>Gerente de Marketin</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nam distinctio totam commodi
                    unde
                    quam sequi ex, ab animi repellendus laudantium. Reiciendis quisquam provident doloremque iste.
                    Laudantium cumque officiis ipsa!
                </p>
            </div>
            <div className="persona">
                <img src="img/nosotros/png-transparent-homer-simpson-bart-simpson-maggie-simpson-marge-simpson-lisa-simpson-cartoon-characters-homer-simpson-homer-simpson-bart-simpson-maggie-simpson.png"
                    alt="" />
                <h5>Homero</h5>
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