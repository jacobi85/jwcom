import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/bootstrap/bootstrap-cosmo.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Content = [
  {
    id: 'sup',
    title: 'Stand up paddleboarding',
    colorClass: 'bg-primary',
    isVisible: false,
    description:
      'The ultimate workout, combines cardio, strength, power and balance and requires a paddle and a paddleboard.'
  },
  {
    id: 'development',
    title: 'Fullstack development',
    colorClass: 'bg-success',
    isVisible: false,
    description:
      'The craft in building websites and applications using react and other web technologies.'
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    colorClass: 'bg-info',
    isVisible: false,
    description:
      'The blockchain, a decentralised network and distributed ledger that will disrupt all industries we know about.'
  }
];

ReactDOM.render(<App data={Content} />, document.getElementById('root'));
registerServiceWorker();
