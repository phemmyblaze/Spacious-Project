import React, { useState, useEffect} from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import MyTab from './Components/MyTab';
import PlanetLoader from './planet-loader.svg';






function App() {

  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false)
    }, 300);
  }, [])

  return (
    <div className="App">
      {isAppLoading && <>
        <Container>
          <NavigationBar />
          <div className="planet-loader-div w-100 d-flex justify-content-center align-items-center">
            <img src={PlanetLoader} alt="planet-loader" />
          </div>
        </Container>
      </>}

      {!isAppLoading &&
      <Container>
        <NavigationBar />
        <MyTab />
      </Container>
      }
      
    </div>
  );
}

export default App;
