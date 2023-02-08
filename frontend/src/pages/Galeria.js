import { useSearchParams } from "react-router-dom";
import { productos } from "../data";
import Producto from "../componentes/Publicaciones/Producto";
import "../styles/galeria.css"
// import Filtro from "../componentes/Filtro";

const Productos = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let productosFiltrados = productos;

  const lugar = searchParams.get("lugar");
  if (lugar) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.lugar === lugar
    );
  }

  const condicion = searchParams.get("condicion");
  if (condicion) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.condicion === condicion
    );
  }

  const tipo = searchParams.get("tipo");
  if (tipo) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.tipo === tipo
    );
  }

  return (
    <main className="public"> 
      {/* <Filtro lugar={lugar} condicion={condicion} tipo={tipo} /> */}

      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => <Producto producto={producto} />)
      ) : (<div>
        <h2>Lo sentimos....</h2>
        <h1>No se encontraron productos</h1>
      </div>
      )}
    </main>
  );
};

export default Productos;














// import React from "react";
// import "../styles/galeria.css";
// import Carousel from "react-bootstrap/Carousel";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// export const Publicacion = (props) => {

//   return (
//     <ul id="elements-list" >

//       <Container className="galeria">
//         <li>1
//           <Row>
//             <Col>
//             <div>
//               <h2>{props.condicion1} </h2>
//               <p class="p">{props.encabezado}</p>
//               <p>{props.subtitulo}</p>
//               <p>Ambientes: {props.ambientes} </p>
//               <p>Dormitorios: {props.dormitorios}</p>
//               <p>M2 Totales: {props.superficie}</p>
//               <p><b>PRECIO: {props.precio}</b></p>
//               <a href="/Map">VER</a>
//               </div>
//             </Col>
//             <Col>
//               <Carousel>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src={require(`/public/img/galeria/Depto_JJ_300/imagen${props.imagen3}.jpeg`)}
//                     alt="Primera Foto"
//                   />
//                   <Carousel.Caption>
//                     <p>
//                       Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src={require(`/public/img/galeria/Depto_JJ_300/imagen${props.imagen2}.jpeg`)}
//                     alt="Second slide"
//                   />
//                   <Carousel.Caption>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src={require(`/public/img/galeria/Depto_JJ_300/imagen${props.imagen4}.jpeg`)}
//                     alt="Third slide"
//                   />
//                   <Carousel.Caption>
//                     <p>
//                       Praesent commodo cursus magna, vel scelerisque nisl
//                       consectetur.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
//             </Col>
//           </Row>
//         </li>
//         <li>2
//           <Row>
//             <Col>
//               <h2>{props.condicion2}</h2>
//               <p class="p">{props.descripcion2}</p>
//             </Col>
//             <Col>
//               <Carousel>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src={require(`/public/img/galeria/terreno1/imagen-${props.imagen11}.jpg`)}
//                     alt="Primera Foto"
//                   />
//                   <Carousel.Caption>
//                     <p>
//                       Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src={require(`/public/img/galeria/terreno1/imagen-${props.imagen21}.jpg`)}
//                     alt="Second slide"
//                   />
//                   <Carousel.Caption>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src={require(`/public/img/galeria/terreno1/imagen-${props.imagen31}.jpg`)}
//                     alt="Third slide"
//                   />
//                   <Carousel.Caption>
//                     <p>
//                       Praesent commodo cursus magna, vel scelerisque nisl
//                       consectetur.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
//             </Col>
//           </Row>
//         </li>

//       </Container>
//     </ul>
//   );
// };

// export default Publicacion;

// export const Galeria = (props) => {
//   return (
//     <Container className="galeria">
//       <ul id="elements-list">
//         <li>
//           1
//           <Row>
//             <Col>
//               <h2>TERRENO</h2>
//               <p class="p">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
//                 reprehenderit blanditiis veritatis dolor mollitia, similique
//                 aliquid quia temporibus facere cumque laboriosam? Accusantium
//                 aspernatur expedita animi tempora magni sunt inventore porro.
//               </p>
//             </Col>

//             <Col>
//               <Carousel>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/terreno2/imagen1.jpg"
//                     alt="First slide"
//                   />
//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/terreno2/imagen2.jpg"
//                     alt="Second slide"
//                   />
//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/terreno2/imagen3.jpg"
//                     alt="Third slide"
//                   />

//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Praesent commodo cursus magna, vel scelerisque nisl
//                       consectetur.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
//             </Col>
//           </Row>
//         </li>
//         <li>
//           2
//           <Row>
//             <Col>
//               <h2>TERRENO</h2>
//               <p class="p">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
//                 reprehenderit blanditiis veritatis dolor mollitia, similique
//                 aliquid quia temporibus facere cumque laboriosam? Accusantium
//                 aspernatur expedita animi tempora magni sunt inventore porro.
//               </p>
//             </Col>
//             <Col>
//               <Carousel>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/terreno1/imagen1.jpg"
//                     alt="First slide"
//                   />
//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/terreno1/imagen2.jpg"
//                     alt="Second slide"
//                   />

//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/terreno1/imagen3.jpg"
//                     alt="Third slide"
//                   />

//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Praesent commodo cursus magna, vel scelerisque nisl
//                       consectetur.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
//             </Col>
//           </Row>
//         </li>
//         <li>
//           3
//           <Row>
//             <Col>
//               <h2>DEPARTAMENTO</h2>
//               <p class="p">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
//                 reprehenderit blanditiis veritatis dolor mollitia, similique
//                 aliquid quia temporibus facere cumque laboriosam? Accusantium
//                 aspernatur expedita animi tempora magni sunt inventore porro.
//               </p>
//             </Col>
//             <Col>
//               <Carousel>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/Depto_JJ_300/imagen4.jpeg"
//                     alt="First slide"
//                   />
//                   <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>
//                       Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/Depto_JJ_300/imagen2.jpeg"
//                     alt="Second slide"
//                   />

//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100, carrusel"
//                     src="/img/galeria/Depto_JJ_300/imagen3.jpeg"
//                     alt="Third slide"
//                   />

//                   <Carousel.Caption>
//                     <h3> </h3>
//                     <p>
//                       Praesent commodo cursus magna, vel scelerisque nisl
//                       consectetur.
//                     </p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
//             </Col>
//           </Row>
//         </li>
//       </ul>
//     </Container>
//   );
// };

// export default Galeria;

// const Galeria = (props) => {
//     return (

//         <main className="holder container text-center ">

//             <div className="row container">
//                 <div className="col-4">

//                     <h2>TITULO</h2>
//                     <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et reprehenderit blanditiis
//                         veritatis dolor
//                         mollitia, similique aliquid quia temporibus facere cumque laboriosam? Accusantium aspernatur
//                         expedita animi tempora magni sunt inventore porro.</p>

//                 </div>

//                 <div className="col-8 ">

//                     <div className="row  carrusel">
//                         <div className="col">

//                             <div id="IMG1" className="carousel slide" data-bs-ride="ture">
//                                 <div class="carousel-indicators">
//                                     <button type="button" data-bs-target="#IMG1" data-bs-slide-to="0" className="active"
//                                         aria-current="true" aria-label="Slide 1"></button>
//                                     <button type="button 1" data-bs-target="#IMG1" data-bs-slide-to="1"
//                                         aria-label="Slide 2"></button>
//                                     <button type="button" data-bs-target="#IMG1" data-bs-slide-to="2"
//                                         aria-label="Slide 3"></button>
//                                     <button type="button" data-bs-target="#IMG1" data-bs-slide-to="3"
//                                         aria-label="Slide 4"></button>
//                                 </div>

//                                 <div className="carousel-inner img">
//                                     <div className="carousel-item active ">
//                                         <img src="img/galeria/Depatamento Jean Jaures 300/WhatsApp Image 2022-02-15 at 4.43.15 PM (5).jpeg"
//                                             className="d-block w-100" alt="..." />
//                                     </div>
//                                     <div className="carousel-item ">
//                                         <img src="img/galeria/Depatamento Jean Jaures 300/WhatsApp Image 2022-02-15 at 4.43.15 PM (2).jpeg"
//                                             className="d-block w-100" alt="..." />
//                                     </div>
//                                     <div className="carousel-item ">
//                                         <img src="img/galeria/Depatamento Jean Jaures 300/WhatsApp Image 2022-02-15 at 4.43.15 PM (3).jpeg"
//                                             className="d-block w-100" alt="..." />
//                                     </div>
//                                     <div className="carousel-item ">
//                                         <img src="img/galeria/Depatamento Jean Jaures 300/WhatsApp Image 2022-02-15 at 4.43.17 PM (1).jpeg"
//                                             className="d-block w-100" alt="..." />
//                                     </div>
//                                 </div>

//                                 <button className="carousel-control-prev" type="button" data-bs-target="#IMG1"
//                                     data-bs-slide="prev">
//                                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                     <span className="visually-hidden">Anterior</span>
//                                 </button>
//                                 <button className="carousel-control-next" type="button" data-bs-target="#IMG1"
//                                     data-bs-slide="next">
//                                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                     <span className="visually-hidden">Siguiente</span>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div>
//                                 <h2>TITULO</h2>
//                                 <p className="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, incidunt
//                                     cupiditate
//                                     excepturi
//                                     illum
//                                     minima iure porro perferendis laudantium nemo reprehenderit recusandae voluptatibus quae
//                                     odio,
//                                     neque impedit aut, nihil iusto ex!</p>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="row  carrusel">
//                         <div className="col ">

//                             <div id="IMG2" className="carousel slide " data-bs-ride="false">
//                                 <div className="carousel-indicators">
//                                     <button type="button" data-bs-target="#IMG2" data-bs-slide-to="0" className="active"
//                                         aria-current="true" aria-label="Slide 1"></button>
//                                     <button type="button" data-bs-target="#IMG2" data-bs-slide-to="1"
//                                         aria-label="Slide 2"></button>
//                                     <button type="button" data-bs-target="#IMG2" data-bs-slide-to="2"
//                                         aria-label="Slide 3"></button>
//                                 </div>
//                                 <div className="carousel-inner img">
//                                     <div className="carousel-item active">
//                                         <img src="https://via.placeholder.com/266x200?text=IMG1" className="d-block w-300"
//                                             alt="..." />
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src="https://via.placeholder.com/266x200?text=IMG2" className="d-block w-300"
//                                             alt="..." />
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src="https://via.placeholder.com/266x200?text=IMG3" className="d-block w-300"
//                                             alt="..." />
//                                     </div>

//                                 </div>
//                                 <button className="carousel-control-prev" type="button" data-bs-target="#IMG2"
//                                     data-bs-slide="prev">
//                                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                     <span className="visually-hidden">Anterior</span>
//                                 </button>
//                                 <button className="carousel-control-next" type="button" data-bs-target="#IMG2"
//                                     data-bs-slide="next">
//                                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                     <span className="visually-hidden">Siguiente</span>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="col ">
//                             <div>
//                                 <h2>TITULO</h2>
//                                 <p class="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, incidunt
//                                     cupiditate
//                                     excepturi
//                                     illum
//                                     minima iure porro perferendis laudantium nemo reprehenderit recusandae voluptatibus quae
//                                     odio,
//                                     neque impedit aut, nihil iusto ex!</p>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="row  carrusel">
//                         <div className="col">
//                             <div id="IMG3" className="carousel slide " data-bs-ride="false">
//                                 <div className="carousel-indicators">
//                                     <button type="button" data-bs-target="#IMG3" data-bs-slide-to="0" class="active"
//                                         aria-current="true" aria-label="Slide 1"></button>
//                                     <button type="button" data-bs-target="#IMG3" data-bs-slide-to="1"
//                                         aria-label="Slide 2"></button>
//                                     <button type="button" data-bs-target="#IMG3" data-bs-slide-to="2"
//                                         aria-label="Slide 3"></button>
//                                 </div>
//                                 <div className="carousel-inner img">
//                                     <div className="carousel-item active">
//                                         <img src="https://via.placeholder.com/\266x200?text=IMG1" className="d-block w-300" alt="..." />
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src="https://via.placeholder.com/266x200?text=IMG2" className="d-block w-300"
//                                             alt="..." />
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src="https://via.placeholder.com/\266x200?text=IMG3" className="d-block w-300" alt="..." />
//                                     </div>
//                                 </div>
//                                 <button className="carousel-control-prev" type="button" data-bs-target="#IMG3"
//                                     data-bs-slide="prev">
//                                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                     <span className="visually-hidden">Previous</span>
//                                 </button>
//                                 <button className="carousel-control-next" type="button" data-bs-target="#IMG3"
//                                     data-bs-slide="next">
//                                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                     <span className="visually-hidden">Next</span>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="col ">
//                             <div>
//                                 <h2>TITULO</h2>
//                                 <p className="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, incidunt
//                                     cupiditate
//                                     excepturi
//                                     illum
//                                     minima iure porro perferendis laudantium nemo reprehenderit recusandae voluptatibus quae
//                                     odio,
//                                     neque impedit aut, nihil iusto ex!
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </main>
//     );
// }

// export default Galeria;
