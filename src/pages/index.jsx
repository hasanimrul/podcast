import React from "react";
import styles from "./style/index.module.css";
import Main from "@/templates/Main";
import PrimaryButton from "@/components/button/primary/primaryButton";
import MusicCard from "@/components/elements/musicCard/musicCard";
import Banner from "@/components/elements/heroBanner/banner/banner";
import LoggedBanner from "@/components/elements/heroBanner/loggedBanner/loggedBanner";
const Index = () => {
  const categories = [
    "For You",
    "Popular",
    "Trend",
    "Pop",
    "Edm",
    "Rock",
    "More",
  ];


  return (

    <Main>
      <div className={styles.container + " boxed-content"}>
        <div className={styles.topContent}>
          <h1>Welcome to fauget music services</h1>
          <PrimaryButton name="Sign Up" />
          <PrimaryButton name="Sign In" />
        </div>
      <LoggedBanner />
        <div className={styles.category}>
          {categories.map((category) => (
            <PrimaryButton name={category} />
          ))}
        </div>
        <div className={styles.musicCard}>
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </div>
    </Main>
  );
};

export default Index;
