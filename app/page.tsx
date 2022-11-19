"use client";
import styles from "@/styles/Home.module.css";
import { RecoilRoot } from "recoil";
import Arrow from "./components/arrow/Arrow";
import CardLayer from "./components/card/CardLayer";

export default function Page() {
  return (
    <RecoilRoot>
      <main className={styles.container}>
        <CardLayer />
        <Arrow />
      </main>
    </RecoilRoot>
  );
}
