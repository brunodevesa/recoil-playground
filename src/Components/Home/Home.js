import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";


import Routes from '../../routes';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container  d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6">
       
            <div className="app-container">

            <h1>Home</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
