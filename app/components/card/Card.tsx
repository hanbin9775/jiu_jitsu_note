import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Card.module.css";
import Draggable from "react-draggable";
import MoreBtn from "@/assets/icon/more_btn.svg";
import { useRecoilState } from "recoil";
import cardsState from "@/atoms/cardsState";

interface IPosition {
  x: number;
  y: number;
  z?: number;
}
export interface ICard {
  title?: string;
  content?: string;
  id: number;
  position: IPosition;
}

const Card = ({ title, content, id, position }: ICard) => {
  const cardRef = useRef<HTMLElement>(null);
  const [cards, setCards] = useRecoilState(cardsState);

  const [isEditable, setEditable] = useState(true);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const onDrag = () => {
    if (cardRef.current) {
      const { x, y, height, width } = cardRef.current.getBoundingClientRect();
      const newPosition = { x: x + width / 2, y: y + height / 2 };
      const newCards = JSON.parse(JSON.stringify(cards));
      newCards[id].position = newPosition;
      console.log(newPosition);
      setCards(newCards);
    }
  };

  return (
    <Draggable onDrag={onDrag}>
      <section className={styles.container} ref={cardRef}>
        <h2 className={styles.header}>
          <input
            className={styles.title}
            placeholder={"제목 입력"}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <div className={styles.icon}>
            <MoreBtn />
          </div>
        </h2>
        <textarea
          className={styles.textarea}
          placeholder="내용을 입력해 주세요"
          disabled={!isEditable}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      </section>
    </Draggable>
  );
};

export default Card;
