import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/bootstrap/bootstrap-cosmo.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
registerServiceWorker();
