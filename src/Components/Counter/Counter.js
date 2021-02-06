import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { countState, countNextState } from "./CounterStore";

import CounterInfo from "../CounterInfo/CounterInfo";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="counter-container container ">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <h2>{count}</h2>
          <button onClick={increment}>Click me</button>
          <CounterInfo />
        </div>
      </div>
    </div>
  );
};

export default Counter;
