import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

import Navbar from "./Components/Navbar/Navbar";

import { countState, countNextState } from "./Components/Counter/CounterStore";

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <div className="main-app-container ">
            <div className="row">
              <div className="col-12">
                <Navbar />
                <Routes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
