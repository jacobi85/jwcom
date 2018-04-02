import React from 'react';
import { Jumbotron, Button, Collapse } from 'react-bootstrap';

function Colrightside({
  data,
  handleToggleContentClick,
  isTogglableContentOpen
}) {
  const renderButton = data.website && (
    <td>
      <Button bsStyle="primary" href={data.website.url} target="_blank">
        {data.website.label}
      </Button>
    </td>
  );
  const renderButton2 = data.website2 && (
    <td>
      <Button
        bsStyle="primary"
        href={data.website2.url}
        target="_blank"
        className="ml-10"
      >
        {data.website2.label}
      </Button>
    </td>
  );
  const renderCaret = isTogglableContentOpen ? (
    <span className="glyphicon glyphicon-menu-up" />
  ) : (
    <span className="glyphicon glyphicon-menu-down" />
  );
  const togglableContent = data.rightContent2 && (
    <div className="App-maincontent__col__collapsible-area">
      <Button bsStyle="link" onClick={handleToggleContentClick}>
        {renderCaret} {isTogglableContentOpen ? 'Show less' : 'Show more'}
      </Button>
      <Collapse in={isTogglableContentOpen} unmountOnExit={false}>
        <p>{data.rightContent2}</p>
      </Collapse>
    </div>
  );
  const jumbotron = (
    <Jumbotron>
      <h2>{data.title}</h2>
      <p>{data.rightContent}</p>
      {togglableContent}
      <br />
      <table>
        <tbody>
          <tr>
            {renderButton}
            {renderButton2}
          </tr>
        </tbody>
      </table>
    </Jumbotron>
  );

  return <React.Fragment>{jumbotron}</React.Fragment>;
}

export default Colrightside;
