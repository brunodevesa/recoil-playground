import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { countState, countNextState } from "./CounterStore";



const Counter = () => {

  const [count, setCount] = useRecoilState(countState);

  function increment(){
    setCount(count+1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Click me</button>
    </div>
  );
};

export default Counter;