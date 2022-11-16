"use client";

import styles from "@/styles/Home.module.css";
import Card from "./components/Card";
import { useState } from "react";

export default function Page() {
  const [cards, setCards] = useState([]);

  return (
    <main className={styles.container}>
      <Card />
      <Card />
      <Card />
    </main>
  );
}
