import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

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
      'As part of the swedish national team I compete in Stand up paddle racing across the globe. I offer private and group sessions for people who want to learn or take the next step.',
    rightContent:
      'Stand up paddling (SUP) is the ultimate workout that combines cardio, strength, power and balance and requires a paddle and a paddleboard. Growing up close to the sea, surrounded by nature - Jacob has a special connection to water. The ocean is an escape, a place to re-energize. A playground for extreme activities such as wave-surfing and paddleboarding. Jacob has always been an active athlete and take this trait seriously. He has competed in world-class events across the globe numerous times as part of the swedish national team.',
    website: {
      url: 'http://www.positivelyjacob.com',
      label: 'Visit Instagram'
    },
    image1: './assets/sceens/sup/sup-heavy-water-tn.jpg',
    image2: './assets/sceens/sup/sup-racing-sweden-tn.jpg',
    tags: ['SUP', 'Surfing', 'Core workout', 'Cardio']
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
      'As a frontend developer, freelancer and contractor specialized in Reactjs I build web applications for buisness owners. I also run a blog to help other developers grow.',
    rightContent:
      'Jacob help business owners realise ideas and build web apps using modern web technologies (such as reactjs, javascript, html5 and css3.) Jacob has been passionate about the web for 2 decades and has worked professionally across the globe for over 10 years in many forms (consultant, employee, startups). Some of his top clients up to date are Dassualt Systemes, Bristol myers squibb, NYX Interactive, and Scandic. One of Jacob’s goals for 2018 is to dig deeper into the fullstack path as well as helping young entrepreneurs and frontend developers in the community.',
    rightContent2:
      'Jacob is specialised in Reactjs but has worked with other frameworks such as angular, dojo, nodejs throughout his career. Jacob has also worked with user experience design and has a bachelor degree in informatics from Linnaeus University.',
    website: { url: 'http://www.westmanpro.com', label: 'Visit blog' },
    website2: {
      url: 'https://www.linkedin.com/in/jacobwestman/',
      label: 'Visit LinkedIn'
    },
    image1: './assets/sceens/sup/sup-heavy-water-tn.jpg',
    image2: './assets/sceens/sup/sup-racing-sweden-tn.jpg',
    tags: ['Programming', 'Reactjs', 'Css', 'Javascript', 'Es6', 'Html5']
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
      'As an entrepreneur I collaborate with some of the largest multi-level marketing companies across the globe to build successful teams and help people escape the 9-5 and live a richer life.',
    rightContent:
      'Raised by entrepreneurial parents, Jacob has always been full of ideas and kept an open mind to new opportunities. As an investor and networker/affiliate - Jacob collaborates with businesses in order to make life richer for others. To learn more choose one of the categories that excites you the most.',
    rightContent2:
      "Jacob is working together with one of the largest cryptocurrency/blockchain mining co-operations in the world run by an american corporate. The blockchain, is a decentralised network and distributed ledger that will disrupt all industries we know about. If you are an interested to join Jacob's team to build an extra (or full) income for yourself feel free to contact him.",
    image1: './assets/sceens/sup/sup-heavy-water-tn.jpg',
    image2: './assets/sceens/sup/sup-racing-sweden-tn.jpg',
    tags: ['Passive income', 'Network marketing', 'Money online']
    /*   rightContent: {
        text: 'The blockchain, a decentralised network and distributed ledger that will disrupt all industries we know about.'
    } */
  }
];

const routeConfig = (
  <Router history={hashHistory}>
    <Route path="/" component={() => <App data={Content} />} />
  </Router>
);

ReactDOM.render(routeConfig, document.getElementById('root'));
registerServiceWorker();
