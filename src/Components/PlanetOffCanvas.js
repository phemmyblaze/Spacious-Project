import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Image} from 'react-bootstrap';
import {data} from '../utilities/arrays'




// const canvasContents = [
    
    
// ]

function PlanetOffCanvas() {
    return (
        <div>
            {
                data.map(canvasContent => (
                    <Row className="d-flex mb-3" key={canvasContent.id}>
                        <div className="col-3">
                            <div className=' OffCanvasStyle .bg-light bg-gradient' >
                                <Image src={canvasContent.image} className='img-fluid h-100 rounded ' />
                            </div>

                        </div>
                        <div className="col-9 py-auto">
                            <p className=" small canvas-style">{canvasContent.characterName}</p>
                            <p className=" smaller canvas-style">{canvasContent.info}</p>

                        </div>

                    </Row>

                ))
                
            }
        </div>
    )
}

export default PlanetOffCanvas
