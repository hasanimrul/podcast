import React from "react";
import styles from "./loggedBanner.module.css";

const LoggedBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div>
        <p>Top play music station</p>
        <h2>The Dark Side of Music: Unveiling Its Negative Effects</h2>
        <p>
          Music, often regarded as a universal language, possesses a profound
          impact on individuals and societies alike. While it has long been
          celebrated for its ability to evoke emotions, foster connections, and
          uplift spirits, the flip side of the melody reveals a spectrum of
          adverse effects that are often overlooked
        </p>
        <button>For You?</button>
      </div>
    </div>
  );
};

export default LoggedBanner;
