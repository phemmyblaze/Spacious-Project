import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Image} from 'react-bootstrap';
import character16 from '../character-16.png'
import character13 from '../character-13.png'
import character3 from '../character-3.png'
import character5 from '../character-5.png'
import character8 from '../character-8.png'
import character6 from '../character-6.png'





const canvasContents = [
    {
        id: 1,
        image: character16,
        characterName:"Darlen Robertson",
        friends: "23 friends"

    },

    {
        id: 2,
        image: character13,
        characterName:"Katling Murphy",
        friends: "23 friends"

    },

    {
        id: 3,
        image: character3,
        characterName:"Jenny Wilson",
        friends: "23 friends"

    },

    {
        id: 4,
        image: character5,
        characterName:"Arlene Meloy",
        friends: "23 friends"

    },
    {
        id: 5,
        image: character8,
        characterName:"Darrel Steward",
        friends: "23 friends"

    },
    {
        id: 6,
        image: character6,
        characterName:"Bessie Cooper",
        friends: "23 friends"

    }
    
]
function OffCanvasFriends() {
    return (
        <div>
            {
                canvasContents.map(canvasContent => (
                    <Row className="d-flex mb-3" key={canvasContent.id}>
                        <div className="col-3 ">
                            <div className=' OffCanvasStyle' >
                                <Image src={canvasContent.image} className='img-fluid h-100 rounded ' />
                            </div>

                        </div>
                        <div className="col-9 py-auto">
                            <p className=" small mt-2 mb-2 pb-2">{canvasContent.characterName}</p>
                            <p className=" extra mt-2 mb-2 pb-2">{canvasContent.friends}</p>

                        </div>

                    </Row>

                ))
                
            }
            
        </div>
    )
}

export default OffCanvasFriends
