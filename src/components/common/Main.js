import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Colleftside from './Colleftside';
import Colrightside from './Colrightside';

function Maincontent({
  activeContent,
  isActive,
  handleToggleContentClick,
  isTogglableContentOpen
}) {
  const componentClass = 'App-maincontent ' + activeContent.colorClass;
  const Img1Url = require(`../../assets/sceens/${activeContent.images[0]}`);
  const Img2Url = require(`../../assets/sceens/${activeContent.images[1]}`);
  const gridInstance = (
    <div className={componentClass}>
      <Row className="show-grid">
        <Col md={6} className="App-maincontent__col App-maincontent__col-1">
          <figure>
            <img src={Img1Url} alt="alt text" />
            <Colleftside data={activeContent.tags} />
          </figure>
        </Col>
        <Col md={6} className="App-maincontent__col App-maincontent__col-2">
          <Colrightside
            data={activeContent}
            handleToggleContentClick={handleToggleContentClick}
            isTogglableContentOpen={isTogglableContentOpen}
          />
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={6} className="App-maincontent__col App-maincontent__col-3" />
        <Col md={6} className="App-maincontent__col App-maincontent__col-4">
          <figure>
            <img src={Img2Url} alt="Stand up paddle - heavy water" />
          </figure>
        </Col>
      </Row>
    </div>
  );

  return (
    <Grid>
      <Row className="show-grid">
        <Col md={12}>
          <Fade when={isActive} duration={1000} distance="20px" collapse top>
            {gridInstance}
          </Fade>
        </Col>
      </Row>
    </Grid>
  );
}

export default Maincontent;
