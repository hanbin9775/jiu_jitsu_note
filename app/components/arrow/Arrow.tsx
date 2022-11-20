import { getArrow, getBoxToBoxArrow } from "perfect-arrows";
import { useEffect, useState } from "react";
import { IPosition, ISize } from "../card/Card";

interface IArrow {
  fromCard: {
    id: number;
    position: IPosition;
    size: ISize;
  };
  toCard: {
    id: number;
    position: IPosition;
    size: ISize;
  };
}

const Arrow = (props: IArrow) => {
  const [arrow, setArrow] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const { x: fromX, y: fromY } = props.fromCard.position;
    const { width: fromWidth, height: fromHeight } = props.fromCard.size;
    const { x: toX, y: toY } = props.toCard.position;
    const { width: toWidth, height: toHeight } = props.fromCard.size;

    setArrow(
      getBoxToBoxArrow(
        fromX,
        fromY,
        fromWidth,
        fromHeight,
        toX,
        toY,
        toWidth,
        toHeight,
        {
          bow: 0.2,
          stretch: 0.5,
          stretchMin: 40,
          stretchMax: 420,
          padStart: 0,
          padEnd: 20,
          flip: false,
          straights: true,
        }
      )
    );
  }, [props]);

  const [sx, sy, cx, cy, ex, ey, ae, as, sc] = arrow;

  const endAngleAsDegrees = ae * (180 / Math.PI);

  return (
    <>
      <path d={`M${sx},${sy} Q${cx},${cy} ${ex},${ey}`} fill="none" />
      <polygon
        points="0,-6 12,0, 0,6"
        transform={`translate(${ex},${ey}) rotate(${endAngleAsDegrees})`}
      />
    </>
  );
};

export default Arrow;
