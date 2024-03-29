import React from "react";
import styles from "./musicCard.module.css";

const MusicCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardItems}>
        <img src="/assets/home/card.png" />
        <button>
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C50.4493 0 65 14.5507 65 32.5ZM3.83217 32.5C3.83217 48.3328 16.6672 61.1678 32.5 61.1678C48.3328 61.1678 61.1678 48.3328 61.1678 32.5C61.1678 16.6672 48.3328 3.83217 32.5 3.83217C16.6672 3.83217 3.83217 16.6672 3.83217 32.5Z"
              fill="white"
            />
            <path
              d="M45.5023 32.1386C46.1689 32.5236 46.1688 33.4859 45.5021 33.8707L24.5004 45.9918C23.8337 46.3766 23.0004 45.8954 23.0005 45.1256L23.0043 20.8769C23.0044 20.107 23.8378 19.6261 24.5044 20.0111L45.5023 32.1386Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <h3>Music</h3>
    </div>
  );
};

export default MusicCard;
