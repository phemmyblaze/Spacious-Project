import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Image} from 'react-bootstrap';


const canvasContents = [
    {
        id: 1,
        image: '/Images/characters/character-16.png',
        characterName:"Eleanor Pena",
        quote: "Amet minim molit non deserunt ullamco e"

    },

    {
        id: 2,
        image: '/images/characters/character-13.png',
        characterName:"Brookly Simmons",
        quote: "Amet minim molit non deserunt ullamco e"

    },

    {
        id: 3,
        image: '/images/characters/character-3.png',
        characterName:"Kristin Waston",
        quote: "Amet minim molit non deserunt ullamco e"

    },

    {
        id: 4,
        image: '/images/characters/character-5.png',
        characterName:"Cody Fisher",
        quote: "Amet minim molit non deserunt ullamco e"

    },
    {
        id: 5,
        image: '/images/characters/character-8.png',
        characterName:"Courtney Henry",
        quote: "Amet minim molit non deserunt ullamco e"

    },
    {
        id: 6,
        image: '/images/characters/character-6.png',
        characterName:"Annette Black",
        quote: "Amet minim molit non deserunt ullamco e"

    }
    
]

function PlanetOffCanvas() {
    return (
        <div>
            {
                canvasContents.map(canvasContent => (
                    <Row className="d-flex mb-3" key={canvasContent.id}>
                        <div className="col-3">
                            <div className=' OffCanvasStyle .bg-light bg-gradient' >
                                <Image src={canvasContent.image} className='img-fluid h-100 rounded ' />
                            </div>

                        </div>
                        <div className="col-9 py-auto">
                            <p className=" small canvas-style">{canvasContent.characterName}</p>
                            <p className=" smaller canvas-style">{canvasContent.quote}</p>

                        </div>

                    </Row>

                ))
                
            }
        </div>
    )
}

export default PlanetOffCanvas
