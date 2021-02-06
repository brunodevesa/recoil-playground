import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

import Counter from "./Components/Counter/Counter";
import CounterInfo from "./Components/CounterInfo/CounterInfo";

import { countState, countNextState } from "./Components/Counter/CounterStore";



export default function App() {
  return (
    <RecoilRoot>
      <Counter />
      <CounterInfo />
    </RecoilRoot>
  );
}
