import { useState } from "react";
import styles from "@/styles/Card.module.css";
import Draggable from "react-draggable";
import MoreBtn from "@/assets/icon/more_btn.svg";

interface ICard {
  title?: string;
  content?: string;
}

const Card = ({ title, content }: ICard) => {
  const [isEditable, setEditable] = useState(true);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  return (
    <Draggable>
      <section className={styles.container}>
        <h2 className={styles.header}>
          <input
            className={styles.title}
            placeholder={"제목 입력"}
            value={title}
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
          value={content}
        />
      </section>
    </Draggable>
  );
};

export default Card;
