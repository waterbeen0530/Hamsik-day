import { atom } from "recoil";

interface atomInterface {
  key: string;
  default: string[];
}

const atomObj: atomInterface = {
  key: "todos", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
};

export const todosRecoil = atom(atomObj);
