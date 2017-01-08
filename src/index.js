import '../sass/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

export const Root = () => (
   <div>
      <Navbar />
      <Header subText="Welcome to digital consulting!!!" />
      <p>thank you</p>
   </div>
);

ReactDOM.render(
   <Root />,
   document.getElementById('app')
);