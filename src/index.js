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
    title: 'Stand up paddler',
    colorClass: 'primary',
    isActive: false,
    description:
      'As part of the swedish national team I compete in Stand up paddle racing across the globe.',
    rightContent:
      'The ultimate workout, combines cardio, strength, power and balance and requires a paddle and a paddleboard.',
    website: 'http://www.positivelyjacob.com',
    image1: './assets/sceens/sup/sup-heavy-water-tn.jpg',
    image2: './assets/sceens/sup/sup-racing-sweden-tn.jpg'
    /* rightContent: {
      text: 'The ultimate workout, combines cardio, strength, power and balance and requires a paddle and a paddleboard.'
    } */
  },
  {
    id: 'development',
    title: 'Frontend developer',
    colorClass: 'secondary',
    isActive: false,
    description:
      'As a frontend developer, freelancer and contractor specialized in Reactjs I build web applications for buisness owners.',
    rightContent:
      'Jacob help business owners realise ideas and to build web apps using modern web technologies (such as reactjs, javascript, html5 and css3.) Jacob has been passionate about the web for 2 decades and been working professionally in many forms (consultant, employee, startups) across the globe for over 10 years. Some of his top clients up to date are Dassualt Systemes, Bristol myers squibb, NYX Interactive, and Scandic.',
    rightContent2:
      'He is specialised in Reactjs but has worked with other frameworks such as angular, dojo, nodejs throughout his career. Jacob has also worked with user experience design and has a bachelor degree in informatics from Linnaeus University. One of Jacob’s goals for 2018 is to dig deeper into the fullstack path as well as helping young entrepreneurs and frontend developers in the community. Check out Jacob’s LinkedIn profile for more information. Check out Jacob’s blog about frontend development at westmanpro.com ',
    website: 'http://www.westmanpro.com',
    image1: './assets/sceens/sup/sup-heavy-water-tn.jpg',
    image2: './assets/sceens/sup/sup-racing-sweden-tn.jpg'
    /* rightContent: {
        text: 'The craft in building websites and applications using react and other web technologies.'
    } */
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur',
    colorClass: 'tertiary',
    isActive: false,
    description:
      'As an entrepreneur I collaborate with some of the largest multi-level marketing companies across the globe to build successful teams and help people escape the 9-5 and build an extra income for themselves.',
    rightContent:
      'The blockchain, a decentralised network and distributed ledger that will disrupt all industries we know about.',
    image1: './assets/sceens/sup/sup-heavy-water-tn.jpg',
    image2: './assets/sceens/sup/sup-racing-sweden-tn.jpg'
    /*   rightContent: {
        text: 'The blockchain, a decentralised network and distributed ledger that will disrupt all industries we know about.'
    } */
  }
];

ReactDOM.render(<App data={Content} />, document.getElementById('root'));
registerServiceWorker();
