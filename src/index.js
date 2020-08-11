import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import App from './App';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Content/>
    <Footer/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);