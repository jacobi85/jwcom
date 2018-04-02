import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Responsive from 'react-responsive';

/** TODO: Move this to responsive.js */
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

function Card(props) {
  const { title, description } = props.data;
  const { bg, id } = props;
  const cardcontainer = (
    <React.Fragment>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>
      </div>
    </React.Fragment>
  );

  let componentStyles = `card text-white ${bg} mb-3`;
  const componentStylesDefault = componentStyles + ' grow';

  return (
    <React.Fragment>
      <Mobile>
        <Link
          to={'/' + id}
          activeClassName="active"
          className={componentStyles}
        >
          {cardcontainer}
        </Link>
      </Mobile>
      <Default>
        <Link
          to={'/' + id}
          activeClassName="active"
          className={componentStylesDefault}
        >
          {cardcontainer}
        </Link>
      </Default>
    </React.Fragment>
  );
}

function Cards(props) {
  return (
    <Grid className="App-cards">
      <Row className="show-grid">
        {props.data.map((card, index) => {
          return (
            <Col md={4} key={card.id}>
              <Card data={card} id={card.id} bg={card.colorClass} />
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
}

export default Cards;
