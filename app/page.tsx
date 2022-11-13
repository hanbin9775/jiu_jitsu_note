"use client";

import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Card from "./components/Card";

export default function Page() {
  const [cards, setCards] = useState([]);

  return (
    <main className={styles.container}>
      <Card />
    </main>
  );
}
