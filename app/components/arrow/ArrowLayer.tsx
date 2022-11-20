import cardsState from "@/atoms/cardsState";
import { useRecoilState } from "recoil";
import Arrow from "./Arrow";

const ArrowLayer = () => {
  const [cards] = useRecoilState(cardsState);

  if (cards === undefined) {
    return <></>;
  }

  return (
    <section>
      <svg
        viewBox="0 0 1280 720"
        style={{ width: 1280, height: 720, zIndex: 100 }}
        stroke="#000"
        fill="#000"
        strokeWidth={3}
      >
        {cards
          .map((fromCard) => {
            if (fromCard.connectedCardIds) {
              return fromCard.connectedCardIds.map((connectedId) => {
                const from = {
                  id: fromCard.id,
                  position: fromCard.position,
                  size: fromCard.size,
                };
                const to = {
                  id: connectedId,
                  position: cards[connectedId].position,
                  size: cards[connectedId].size,
                };
                return (
                  <Arrow
                    key={`${fromCard.id}-${connectedId}`}
                    fromCard={from}
                    toCard={to}
                  />
                );
              });
            }
            return [];
          })
          .flat()}
      </svg>
    </section>
  );
};

export default ArrowLayer;
