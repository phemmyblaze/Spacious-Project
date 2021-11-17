import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Image} from 'react-bootstrap';
import {  useState } from 'react'


function CreateNewCharacter() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    


    return (
        <div>
            <Button variant="" className="rounded-circle"  onClick={handleShow}>
                <Image src="./plus-64-icon.png"  roundedCircle />
            </Button>
            
    
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header closeButton>
                    <closeButton variant="primary"/>
                    <Modal.Title className="big">Characters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="small">Images</Form.Label>
                            <Form.Control type="text"  size="lg" className="bg-light " />
                            <Form.Text className="text-muted small fw-normal">
                                Paste the URL of a JPG or PNG of max 20 kb    
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="small">Name</Form.Label>
                            <Form.Control type="text"  size="lg" className="bg-light " />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="small">Description</Form.Label>
                            <Form.Control as="textarea" className="bg-light " rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="extra">Friends</Form.Label>
                            
                            <Form.Select size="lg" className="extra">
                                <option className="extra">Jane Cooper</option>
                                <option value="1" className="extra">Johnattan Jameson</option>
                                <option value="2" className="extra">Clara Maggie</option>
                                <option value="3" className="extra">Three</option>
                            </Form.Select>
                        </Form.Group>
                        
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" size="lg" className="text-dark" onClick={handleClose}>CANCEL</Button>
                    <Button variant="" className="btn-1 btn-secondary text-white" size="lg" onClick={handleClose}>CREATE CHARACTER</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default CreateNewCharacter

