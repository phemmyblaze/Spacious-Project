import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Image} from 'react-bootstrap';





const canvasContents = [
    {
        id: 1,
        image: '/images/characters/character-16.png',
        characterName:"Darlen Robertson",
        friends: "23 friends"

    },

    {
        id: 2,
        image: '/images/characters/character-13.png',
        characterName:"Katling Murphy",
        friends: "23 friends"

    },

    {
        id: 3,
        image: '/images/characters/character-3.png',
        characterName:"Jenny Wilson",
        friends: "23 friends"

    },

    {
        id: 4,
        image: '/images/characters/character-5.png',
        characterName:"Arlene Meloy",
        friends: "23 friends"

    },
    {
        id: 5,
        image: '/images/characters/character-8.png',
        characterName:"Darrel Steward",
        friends: "23 friends"

    },
    {
        id: 6,
        image: '/images/characters/character-6.png',
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
                            <p className=" small canvas-style">{canvasContent.characterName}</p>
                            <p className=" extra canvas-style">{canvasContent.friends}</p>

                        </div>

                    </Row>

                ))
                
            }
            
        </div>
    )
}

export default OffCanvasFriends
