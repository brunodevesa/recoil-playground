import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { countState, countNextState, doubleCounter } from "../Counter/CounterStore";

//This component shares the same atom making the count state global or shareble
const CounterInfo = () => {
  const count = useRecoilValue(countNextState);
  const double = useRecoilValue(doubleCounter);

  return (
    <div>
      <p>the next number is {count}</p>
      <p>the double of the current counter is {double}</p>
    </div>
  );
};

export default CounterInfo;
