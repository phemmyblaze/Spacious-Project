import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Nav} from 'react-bootstrap';
import PlanetCard from './PlanetCard';
import CharacterCards from './CharacterCards';




function MyTab() {
    return (
        <Tab.Container id="" defaultActiveKey="first">
            <Nav variant="pills" className="mb-2">
                <Nav.Item>
                    <Nav.Link eventKey="first" className=" text-dark px-3 small">PLANETS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second" className="text-dark px-3 small" >CHARACTERS</Nav.Link>
                </Nav.Item>
            </Nav>
                
            
            <Tab.Content className="mb-2">

                <Tab.Pane eventKey="first">
                    <PlanetCard />
                    
                </Tab.Pane>
                    
                <Tab.Pane eventKey="second">
                    <CharacterCards />
                </Tab.Pane>
            </Tab.Content> 
                   
                
            

            
        </Tab.Container>
    )
}

export default MyTab
