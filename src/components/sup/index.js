import React from 'react';
import Maincontent from '../common/Main';
import Content from '../../data/content.json';

function SUPPage() {
  return <Maincontent activeContent={Content[0]} />;
}

export default SUPPage;
