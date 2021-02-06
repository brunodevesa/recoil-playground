import {atom, selector} from 'recoil';

/* STATE OBSERVABLES */
export const countState = atom({
  key: "countState",
  default: 0,
});

/* STATE COMPUTED (DERIVATIVE STATE) */
export const countNextState = selector({
  key: "counterNextState",
  get: ({ get }) => {
    return get(countState) + 1;
  },
});

export const doubleCounter = selector({
  key: "doubleCounter",
  get: ({ get }) => {
    return get(countState) * 2;
  },
});


