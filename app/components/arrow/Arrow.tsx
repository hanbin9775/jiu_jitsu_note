import { getArrow } from "perfect-arrows";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import cardsState from "@/atoms/cardsState";

const Arrow = () => {
  const [cards] = useRecoilState(cardsState);

  const [arrow, setArrow] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (cards !== undefined) {
      const { x: fromX, y: fromY } = cards[0].position;
      const { x: toX, y: toY } = cards[1].position;
      console.log(fromX, fromY);

      setArrow(
        getArrow(fromX, fromY, toX, toY, {
          bow: 0,
          stretch: 0.5,
          stretchMin: 0,
          stretchMax: 420,
          padStart: 0,
          padEnd: 0,
          flip: false,
          straights: true,
        })
      );
    }
  }, [cards]);

  const [sx, sy, cx, cy, ex, ey, ae, as, sc] = arrow;

  return (
    <svg
      viewBox="0 0 1280 720"
      style={{ width: 1280, height: 720 }}
      stroke="#000"
      fill="#000"
      strokeWidth={3}
    >
      <path
        name="line-between"
        d={`M${sx},${sy} Q${cx},${cy} ${ex},${ey}`}
        strokeWidth={3}
        fill="none"
      />
    </svg>
  );
};

export default Arrow;
