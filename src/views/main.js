import * as React from 'react';
import Header from '../components/Header';
import LinkList from '../components/LinkList';
import ShortLink from '../components/ShortLink';
import './main.css';

const Main = () => {
  return (
    <div className="container">
      <Header />
      <ShortLink />
      <LinkList />
    </div>
  );
};

export default Main;
