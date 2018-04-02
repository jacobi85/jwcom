import React from 'react';
import { Route } from 'react-router';
import App from './App';
import SUPPage from './components/sup/index';
import CodePage from './components/programming/index';
import EntrepreneurPage from './components/entrepreneur/index';
import MotivatorPage from './components/motivator/index';

export default (
  <Route path="/" component={App}>
    <Route path="sup" component={SUPPage} />
    <Route path="code" component={CodePage} />
    <Route path="blockchain" component={EntrepreneurPage} />
    <Route path="motivator" component={MotivatorPage} />
  </Route>
);
