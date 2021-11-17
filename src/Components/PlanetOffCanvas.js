import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Image} from 'react-bootstrap';
import character1 from '../character-1.png'
import character2 from '../character-2.png'
import character3 from '../character-3.png'
// import character4 from '../character-4.png'
// import character5 from '../character-5.png'
import character6 from '../character-6.png'
import character7 from '../character-7.png'
import character8 from '../character-8.png'
// import character9 from '../character-9.png'
// import character10 from '../character-10.png'
// import character11 from '../character-11.png'


const canvasContents = [
    {
        id: 1,
        image: character1,
        characterName:"Eleanor Pena",
        quote: "Amet minim molit non deserunt ullamco e"

    },

    {
        id: 2,
        image: character2,
        characterName:"Brookly Simmons",
        quote: "Amet minim molit non deserunt ullamco e"

    },

    {
        id: 3,
        image: character3,
        characterName:"Kristin Waston",
        quote: "Amet minim molit non deserunt ullamco e"

    },

    {
        id: 4,
        image: character6,
        characterName:"Cody Fisher",
        quote: "Amet minim molit non deserunt ullamco e"

    },
    {
        id: 5,
        image: character7,
        characterName:"Courtney Henry",
        quote: "Amet minim molit non deserunt ullamco e"

    },
    {
        id: 6,
        image: character8,
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
