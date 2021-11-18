    import React from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Row, Col, Offcanvas, Form } from 'react-bootstrap';
    import Card from 'react-bootstrap/card';
    import CreateNewCharacter from './CreateNewCharacter';
    import {  useState } from 'react';
    import PlanetOffCanvas from './PlanetOffCanvas';
    import {data as characters} from '../utilities/arrays'
    








    function CharacterCards({ name, ...props }) {
        

        const [characterInfo, setCharacterInfo] = useState("");
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = (character) => {
            setCharacterInfo(character)
             setShow(true);
        }

        
        return (
            <>
            <Form.Select aria-label="Default select example" className="select-planet position-absolute small" style={{ width: 'min-content' }}>
                <option value="0" >Planet: ALL ⬇ </option>
                <option value="1" >Planet: Alpha </option>
                <option value="2" >Planet: Friends </option>
            </Form.Select>
            <Row xs={1} md={3} lg={4} sm={1} className="d-flex justify-content-between position-relative">
            

                {
                    characters.map(character => (
                        
                            <Col xs="auto" md="auto" lg="3" sm="auto">
                                <Card onClick={() => handleShow(character)} className="card-new bg-light rounded my-3 pb-2 bg-white" key={characters.id}>
                                        <a  href="#" className=" text-decoration-none" data-bs-toggle="offcanvas"  role="button"                aria-controls="offcanvasExample" onClick={handleShow}>
                                            <div className="character-size">
                                                <Card.Img variant="top" className="img-fluid h-100" src={character.image} />
                                            </div>
                                            
                                            <Card.Body className="my-2  pt-0 pb-0 ps-1 pe-1">
                                                <Card.Title className="small m-0 p-0 ps-2">{character.characterName}</Card.Title>
                                                <Card.Text>
                                                    <small className="text-muted smaller m-0 p-0 ps-2">{character.pops}</small>
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
                            <Offcanvas.Title className="bigger  ms-3">{characterInfo.characterName}</Offcanvas.Title>
                        </Offcanvas.Header>
                        
                        <Offcanvas.Body >
                            <p className="extra">{characterInfo.info}</p>
                            <Row className="mt-4">
                                <Col>
                                    <p className="little">Planet</p>
                                    <p className="small">Alpha</p>

                                </Col>
                                <Col>
                                    <p className="little">Friends</p>
                                    <p className="small">{characterInfo.pops}</p>

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
