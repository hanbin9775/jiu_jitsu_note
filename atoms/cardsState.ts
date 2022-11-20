import { atom, selector } from "recoil";
import { ICard } from "../app/components/card/Card";

const cardsState = atom<ICard[]>({
  key: "cardsState",
  default: [
    {
      title: "",
      content: "",
      id: 0,
      position: {
        x: 10,
        y: 10,
        z: 0,
      },
      size: { width: 10, height: 20 },
      connectedCardIds: [1],
    },
    {
      title: "",
      content: "",
      id: 1,
      size: { width: 10, height: 20 },
      position: {
        x: 200,
        y: 200,
        z: 0,
      },
    },
  ],
});

export default cardsState;
