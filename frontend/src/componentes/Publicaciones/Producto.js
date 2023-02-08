import React, { useState } from "react";
import "../../styles/galeria.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Map from '../../pages/APIs/Map_Google';

const Producto = (props) => {
  const { tipo, condicion, descripcion, direccion, dormitorios, ambientes, superficie, precio, lat, lng, imagen1, imagen2, imagen3 } = props.producto;

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
    return (
      <button className="boton"
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  function Mapa() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Ver Mapa</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>  {Map(parseFloat(lat), parseFloat(lng))} </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }

  return (
    <Container className="galeria">
      <Row>
        <Col>
          <pre className="publicaciones">
            <h2><b>{tipo}</b></h2> 
            <h3>En {condicion}: </h3>            
            <ul>
              <li><p class="p">{descripcion} </p></li>
              <li><p>{direccion}</p></li>
              <li><p>Ambientes: {ambientes} </p></li>
              <li><p>Dormitorios: {dormitorios}</p></li>
              <li><p>M2 Totales: {superficie}</p></li>
              <li><p><b>PRECIO: {precio}</b></p></li>
            </ul>
          </pre>
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100, carrusel"
                src={require(`../Publicaciones/img/imagen${imagen1}.jpeg`)}
                alt="Primera Foto"
              />
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100, carrusel"
                src={require(`../Publicaciones/img/imagen${imagen2}.jpeg`)}
                alt="Second slide"
              />
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100, carrusel"
                src={require(`../Publicaciones/img/imagen${imagen3}.jpeg`)}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Mapa />
      </Row>
    </Container>
  );
};

export default Producto;
