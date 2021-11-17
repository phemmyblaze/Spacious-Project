import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col, Card, Offcanvas} from 'react-bootstrap';
import {  useState } from 'react';
import CreateNewPlanet from './CreateNewPlanet';
import OffCanvasFriends from './OffCanvasFriends';
import planet1 from '../planet-1.svg';
import planet2 from '../planet-2.svg';
import planet3 from '../planet-3.svg';
import planet4 from '../planet-4.svg';
import planet5 from '../planet-5.svg';
import planet6 from '../planet-6.svg';
import planet7 from '../planet-7.svg';
import planet8 from '../planet-8.svg';
import planet9 from '../planet-9.svg';





function PlanetCard({ name, ...props }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const planets = [
        {
            id: 1,
            image: planet9,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },

        {
            id: 2,
            image: planet8,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },

        {
            id: 3,
            image: planet7,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },

        {
            id: 4,
            image: planet6,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 5,
            image: planet6,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 6,
            image: planet3,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 7,
            image: planet1,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 8,
            image: planet2,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 9,
            image: planet2,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 10,
            image: planet4,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 11,
            image: planet5,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
        {
            id: 12,
            image: planet3,
            planetName:"Planet Alpha",
            pops: "Pop: 235"

        },
    ]
    return (
        <Row xs={1} md={3} lg={4} sm={1} className="d-flex justify-content-between">

            {
                planets.map(planet => (
                    
                    <Col xs="auto" md="auto" lg="3" sm="auto">
                        <a>
                            <Card className="card-new rounded my-3" key={planet.id}>
                                <a  href="#" className=" text-decoration-none" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" onClick={handleShow}>
                                    <div className="planet-size mx-auto">
                                        <Card.Img variant="top" className="img-fluid" src={planet.image} /> 

                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold small ">{planet.planetName}</Card.Title>
                                        <Card.Text>
                                            <small className="text-muted fs-12">{planet.pops}</small>
                                        </Card.Text>
                                    </Card.Body>
                                </a>
                                            
                            </Card>
                        
                            
                        </a>
                        
                    </Col>
            
                    
                ))
            }
            {

           
                <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="offcanvas-style" >
                    <Offcanvas.Header closeButton className="ms-auto me-4">
                    
                    </Offcanvas.Header>
                    <Offcanvas.Title className="bigger  ms-3">Planet Alpha</Offcanvas.Title>
                    <Offcanvas.Body >
                        <p className="little">Planet Alpha is the place to be if you like everything related to planets. I know it's a bit meta but come see by yourself. </p>
                        <Row className="mt-4">
                            <Col className=" ">
                                <p className="little mt-2 mb-2 pb-2">Population</p>
                                <p className="small mt-2 mb-2 pb-2">234</p>

                            </Col>
                            
                        </Row>
                        <p className="small text-muted mt-3">CHARACTERS</p>
                        {
                            <Row className="d-flex">
                                <OffCanvasFriends/>

                            </Row>
                            
                        }
                        

                    </Offcanvas.Body>
                    
                </Offcanvas>
            }   
            <div className=" fix text-center">
                <CreateNewPlanet/> 

            </div>


        </Row>
        

        
        
    )
}

export default PlanetCard
