    import React from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Row, Col, Offcanvas } from 'react-bootstrap';
    import Card from 'react-bootstrap/card';
    import CreateNewCharacter from './CreateNewCharacter';
    import {  useState } from 'react';
    import PlanetOffCanvas from './PlanetOffCanvas';






    function CharacterCards({ name, ...props }) {
        
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const characters = [
            {
                id: 1,
                image: './images/characters/character-7.png',
                planetName:"Brooklyn Simmons",
                props: "23 friends"

            },

            {
                id: 2,
                image: './images/characters/character-16.png',
                planetName:"Cameron Williamson",
                props: "23 friends"

            },

            {
                id: 3,
                image: './images/characters/character-2.png',
                planetName:"Leslie Alexander",
                props: "23 friends"

            },

            {
                id: 4,
                image: './images/characters/character-8.png',
                planetName:"Kriston Watson",
                props: "23 friends"

            },
            {
                id: 5,
                image: './images/characters/character-5.png',
                planetName:"Jenny Wilson",
                props: "23 friends"

            },
            {
                id: 6,
                image: './images/characters/character-12.png',
                planetName:"Marvin Mckinney",
                props: "23 friends"

            },
            {
                id: 7,
                image: '/images/characters/character-6.png',
                planetName:"Jerome Bell",
                props: "23 friends"

            },
            {
                id: 8,
                image: '/images/characters/character-4.png',
                planetName:"Guy Hawkins",
                props: "23 friends"

            },
            {
                id: 9,
                image: '/images/characters/character-10.png',
                planetName:"Robert Fox",
                props: "23 friends"

            },
            {
                id: 10,
                image: '/images/characters/character-3.png',
                planetName:"Mandy Witt",
                props: "23 friends"

            },
            {
                id: 11,
                image: '/images/characters/character-6.png',
                planetName:"Careen Taylor",
                props: "23 friends"

            },
            {
                id: 12,
                image: '/images/characters/character-7.png',
                planetName:"David Brown",
                props: "23 friends"

            },
        ]
        return (
            <Row xs={1} md={3} lg={4} sm={1} className="d-flex justify-content-between ">

                {
                    characters.map(character => (
                        
                            <Col xs="auto" md="auto" lg="3" sm="auto">
                                <Card className="card-style my-3 pb-2 bg-white" key={character.id}>
                                        <a  href="#" className=" text-decoration-none" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" onClick={handleShow}>
                                            <div className="character-size">
                                                <Card.Img variant="top" className="img-fluid h-100" src={character.image} />
                                            </div>
                                            
                                            <Card.Body className="my-2  pt-0 pb-0 ps-1 pe-1">
                                                <Card.Title className="small m-0 p-0 mt-2 mb-2 pb-2">{character.planetName}</Card.Title>
                                                <Card.Text>
                                                    <small className="text-muted smaller m-0 p-0 mt-2 mb-2 pb-2">{character.props}</small>
                                                </Card.Text>
                                            </Card.Body>

                                        </a>
                                                    
                                </Card>
                                    
                                
                            
                            </Col>

                    
                        

                        

                        
                        
                
                        
                    ))
                }
                {

            
                    <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="offcanvas-style " md="auto" lg="auto" sm="auto">
                        <Offcanvas.Header closeButton className="ms-auto me-4">
                        
                        </Offcanvas.Header>
                        <Offcanvas.Title className="bigger  ms-3">Jane Cooper</Offcanvas.Title>
                        <Offcanvas.Body >
                            <p className="extra">Jane is really a nice person. She’s been living on planet Alpha for the last 10 years. </p>
                            <Row className="mt-4">
                                <Col>
                                    <p className="little">Planets</p>
                                    <p className="small">Alpha</p>

                                </Col>
                                <Col>
                                    <p className="little">Friends</p>
                                    <p className="small">23</p>

                                </Col>
                            </Row>
                            <p className="small text-muted mt-3">FRIENDS</p>
                            {
                                <Row className="d-flex">
                                    <PlanetOffCanvas />

                                </Row>

                            
                            }
                        </Offcanvas.Body>
                        
                    </Offcanvas>
                }   
                <div className=" fix text-center d-sm-none d-md-block">
                    <CreateNewCharacter handleShow={handleShow}/> 

                </div>

            </Row>

            
            
        )
    }



    export default CharacterCards
