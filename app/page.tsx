"use client";
import styles from "@/styles/Home.module.css";
import { RecoilRoot } from "recoil";
import ArrowLayer from "./components/arrow/ArrowLayer";
import CardLayer from "./components/card/CardLayer";

export default function Page() {
  return (
    <RecoilRoot>
      <main className={styles.container}>
        <CardLayer />
        <ArrowLayer />
      </main>
    </RecoilRoot>
  );
}
