import { useRecoilState } from "recoil";
import cardsState from "@/atoms/cardsState";
import Card from "./Card";

const CardLayer = () => {
  const [cards] = useRecoilState(cardsState);
  return (
    <section>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  );
};

export default CardLayer;
