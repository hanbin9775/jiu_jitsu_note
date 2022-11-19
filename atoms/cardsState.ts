import { atom, selector } from "recoil";
import { ICard } from "../app/components/card/Card";

const cardsState = atom<ICard[]>({
  key: "cardsState",
  default: [
    {
      title: "from",
      content: "",
      id: 0,
      position: {
        x: 10,
        y: 10,
        z: 0,
      },
    },
    {
      title: "to",
      content: "",
      id: 1,
      position: {
        x: 200,
        y: 200,
        z: 0,
      },
    },
  ],
});

export default cardsState;
