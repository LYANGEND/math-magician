import React from 'react';
import Header from './Header';

const Home = () => (
  <main>
    <Header />
    <div className="main">
      <h1 className="title">Welcome</h1>
      <p className="paragraph">
        Math magicians is an exclusive website for all math enthusiasts. It is a Single
        Page App (SPA) that enables users to make simple calculations and read
        random math-related quote.
      </p>
    </div>
  </main>
);
export default Home;
