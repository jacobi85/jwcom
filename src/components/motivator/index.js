import React from 'react';
import Maincontent from '../common/Main';
import Content from '../../data/content.json';

function MotivatorPage() {
  return <Maincontent activeContent={Content[3]} />;
}

export default MotivatorPage;
