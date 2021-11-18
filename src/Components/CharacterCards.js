    import React from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Row, Col, Offcanvas, Form } from 'react-bootstrap';
    import Card from 'react-bootstrap/card';
    import CreateNewCharacter from './CreateNewCharacter';
    import {  useState } from 'react';
    import PlanetOffCanvas from './PlanetOffCanvas';
    import character1 from '../character-1.png'
    import character2 from '../character-2.png'
    import character3 from '../character-3.png'
    import character4 from '../character-4.png'
    import character5 from '../character-5.png'
    import character6 from '../character-6.png'
    import character7 from '../character-7.png'
    import character8 from '../character-8.png'
    import character9 from '../character-9.png'
    import character10 from '../character-10.png'
    import character11 from '../character-11.png'
    








    function CharacterCards({ name, ...props }) {
        
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


        const characters = [
            {
                id: 1,
                image: character1,
                characterName:"Brooklyn Simmons",
                pops: "23 friends"

            },

            {
                id: 2,
                image: character2,
                characterName:"Cameron Williamson",
                pops: "23 friends"

            },

            {
                id: 3,
                image: character5,
                characterName:"Leslie Alexander",
                pops: "23 friends"

            },

            {
                id: 4,
                image: character4,
                characterName:"Kriston Watson",
                pops: "23 friends"

            },
            {
                id: 5,
                image: character6,
                characterName:"Jenny Wilson",
                pops: "23 friends"

            },
            {
                id: 6,
                image: character7,
                characterName:"Marvin Mckinney",
                pops: "23 friends"

            },
            {
                id: 7,
                image: character8,
                characterName:"Jerome Bell",
                pops: "23 friends"

            },
            {
                id: 8,
                image: character9,
                characterName:"Guy Hawkins",
                pops: "23 friends"

            },
            {
                id: 9,
                image: character10,
                characterName:"Robert Fox",
                pops: "23 friends"

            },
            {
                id: 10,
                image: character11,
                characterName:"Mandy Witt",
                pops: "23 friends"

            },
            {
                id: 11,
                image: character2,
                characterName:"Careen Taylor",
                pops: "23 friends"

            },
            {
                id: 12,
                image: character3,
                characterName:"David Brown",
                pops: "23 friends"

            },
        ]
        return (
            <>
            <Form.Select aria-label="Default select example" className="select-planet position-absolute small" style={{ width: 'min-content' }}>
                <option value="0" >Planet: ALL ⬇ </option>
                <option value="1" >Planet: Alpha </option>
                <option value="2" >Planet: Friends </option>
            </Form.Select>
            <Row xs={1} md={3} lg={4} sm={1} className="d-flex justify-content-between position-relative">
            

                {
                    characters.map(characters => (
                        
                            <Col xs="auto" md="auto" lg="3" sm="auto">
                                <Card className="card-new bg-light rounded my-3 pb-2 bg-white" key={characters.id}>
                                        <a  href="#" className=" text-decoration-none" data-bs-toggle="offcanvas"  role="button"                aria-controls="offcanvasExample" onClick={handleShow}>
                                            <div className="character-size">
                                                <Card.Img variant="top" className="img-fluid h-100" src={characters.image} />
                                            </div>
                                            
                                            <Card.Body className="my-2  pt-0 pb-0 ps-1 pe-1">
                                                <Card.Title className="small m-0 p-0 ps-2">{characters.characterName}</Card.Title>
                                                <Card.Text>
                                                    <small className="text-muted smaller m-0 p-0 ps-2">{characters.pops}</small>
                                                </Card.Text>
                                            </Card.Body>

                                        </a>
                                                    
                                </Card>
                                    
                                
                            
                            </Col>


                        
                    ))
                }
                {

                    <>
                    <CreateNewCharacter className="position-absolute bottom-0 end-0 mt-5" handleShow={handleShow}/> 
                    <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="offcanvas-style" md="auto" lg="auto" sm="auto">
                        <Offcanvas.Header closeButton className="">
                            <Offcanvas.Title className="bigger  ms-3"></Offcanvas.Title>
                        </Offcanvas.Header>
                        
                        <Offcanvas.Body >
                            <p className="extra"> is really a nice person. She’s been living on planet Alpha for the last 10 years. </p>
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

                
                    </>
                }   

            </Row>

            
        </>
        )
    }



    export default CharacterCards
