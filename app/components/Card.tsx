import styles from "@/styles/Card.module.css";
import Textarea from "rc-textarea";

const Card = () => {
  return (
    <section className={styles.container}>
      <Textarea
        className={styles.textarea}
        placeholder="내용을 입력해 주세요"
        autoSize={true}
      />
    </section>
  );
};

export default Card;
