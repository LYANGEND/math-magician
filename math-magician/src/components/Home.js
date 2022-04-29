import React from 'react';
import Header from './Header';

const Home = () => (
  <main>
    <Header />
    <div className="main">
      <h1 className="title">Welcome to our page</h1>
      <p className="paragraph">
        Math magicians is a website for all math enthusiasts. It is a Single
        Page App (SPA) that enables users to make math computations and read a
        random math-related quote.
      </p>
    </div>
  </main>
);
export default Home;
