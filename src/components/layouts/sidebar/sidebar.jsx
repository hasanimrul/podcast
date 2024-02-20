import React from "react";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <div className={styles.menu}>
          <img src="/assets/sidebar/logo.svg" />
          <h3>
            Menu <img src="/assets/sidebar/Line .svg" />
          </h3>
          <h4>
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="white" />
            </svg>{" "}
            Home
          </h4>
          <h4>
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99998 0V10.55C5.23689 10.1094 4.34968 9.93317 3.47613 10.0486C2.60258 10.164 1.79158 10.5646 1.16907 11.1882C0.546563 11.8118 0.147388 12.6235 0.0335364 13.4973C-0.0803153 14.371 0.0975274 15.2579 0.539446 16.0202C0.981364 16.7825 1.66263 17.3776 2.47744 17.713C3.29225 18.0484 4.195 18.1054 5.04551 17.8751C5.89602 17.6448 6.64668 17.1401 7.18093 16.4393C7.71517 15.7386 8.00309 14.8811 7.99998 14V4H12V0M3.99998 16C3.60442 16 3.21774 15.8827 2.88884 15.6629C2.55994 15.4432 2.3036 15.1308 2.15222 14.7654C2.00085 14.3999 1.96124 13.9978 2.03841 13.6098C2.11558 13.2219 2.30606 12.8655 2.58577 12.5858C2.86547 12.3061 3.22184 12.1156 3.6098 12.0384C3.99776 11.9613 4.3999 12.0009 4.76535 12.1522C5.1308 12.3036 5.44316 12.56 5.66292 12.8889C5.88268 13.2178 5.99998 13.6044 5.99998 14C5.99998 14.5304 5.78927 15.0391 5.41419 15.4142C5.03912 15.7893 4.53041 16 3.99998 16Z"
                fill="white"
              />
              <path
                d="M15.6009 9C15.0521 9.52146 14.3022 9.88466 13.4672 10.0333C13.5196 9.86483 13.5045 9.68753 13.424 9.52618C13.3434 9.36482 13.2014 9.22748 13.0178 9.13331C12.8342 9.03914 12.6181 8.99285 12.3998 9.0009C12.1815 9.00896 11.9718 9.07095 11.7999 9.17823C11.6281 9.28551 11.5028 9.43272 11.4414 9.59931C11.38 9.7659 11.3856 9.94355 11.4575 10.1075C11.5294 10.2714 11.664 10.4134 11.8424 10.5136C12.0208 10.6139 12.2342 10.6674 12.4528 10.6667H12.6207C13.4952 10.6657 14.3497 10.4589 15.0762 10.0722L14.1318 12.3889C13.5911 12.8796 12.8687 13.2219 12.068 13.3667C12.1205 13.1982 12.1054 13.0209 12.0248 12.8595C11.9443 12.6982 11.8023 12.5608 11.6187 12.4666C11.435 12.3725 11.219 12.3262 11.0007 12.3342C10.7823 12.3423 10.5726 12.4043 10.4008 12.5116C10.229 12.6188 10.1036 12.7661 10.0422 12.9326C9.98085 13.0992 9.9865 13.2769 10.0584 13.4408C10.1303 13.6047 10.2649 13.7467 10.4433 13.847C10.6217 13.9472 10.8351 14.0007 11.0537 14H11.2216C12.0961 13.9991 12.9506 13.7922 13.677 13.4056L11.4034 19H12.8026L17 9H15.6009Z"
                fill="white"
              />
            </svg>{" "}
            Podcast
          </h4>
          <h4>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.32 10.99L17.31 11.01C17.35 10.68 17.39 10.34 17.39 10C17.39 9.66 17.36 9.34 17.32 9.01L17.33 9.03L19.77 7.11L17.34 2.89L14.47 4.05L14.48 4.06C13.96 3.66 13.39 3.32 12.77 3.06H12.78L12.32 0H7.45L7.01 3.07H7.02C6.4 3.33 5.83 3.67 5.31 4.07L5.32 4.06L2.44 2.89L0 7.11L2.44 9.03L2.45 9.01C2.41 9.34 2.38 9.66 2.38 10C2.38 10.34 2.41 10.68 2.46 11.01L2.45 10.99L0.35 12.64L0.0200002 12.9L2.45 17.1L5.33 15.95L5.31 15.91C5.84 16.32 6.41 16.66 7.04 16.92H7.01L7.46 20H12.31C12.31 20 12.34 19.82 12.37 19.58L12.75 16.93H12.74C13.36 16.67 13.94 16.33 14.47 15.92L14.45 15.96L17.33 17.11L19.76 12.91C19.76 12.91 19.62 12.79 19.43 12.65L17.32 10.99ZM9.88 13.5C7.95 13.5 6.38 11.93 6.38 10C6.38 8.07 7.95 6.5 9.88 6.5C11.81 6.5 13.38 8.07 13.38 10C13.38 11.93 11.81 13.5 9.88 13.5Z"
                fill="white"
              />
            </svg>
            Settings
          </h4>
        </div>
        <div className={styles.playlist}>
          <h3>
            My Playlist <img src="/assets/sidebar/Line .svg" />
          </h3>
          <h4>
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0H0V2H12V0ZM12 4H0V6H12V4ZM0 10H8V8H0V10ZM14 0V8.18C13.69 8.07 13.35 8 13 8C12.2044 8 11.4413 8.31607 10.8787 8.87868C10.3161 9.44129 10 10.2044 10 11C10 11.7956 10.3161 12.5587 10.8787 13.1213C11.4413 13.6839 12.2044 14 13 14C13.7956 14 14.5587 13.6839 15.1213 13.1213C15.6839 12.5587 16 11.7956 16 11V2H19V0H14Z"
                fill="white"
              />
            </svg>
            Playlist #A
          </h4>
          <h4>
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0H0V2H12V0ZM12 4H0V6H12V4ZM0 10H8V8H0V10ZM14 0V8.18C13.69 8.07 13.35 8 13 8C12.2044 8 11.4413 8.31607 10.8787 8.87868C10.3161 9.44129 10 10.2044 10 11C10 11.7956 10.3161 12.5587 10.8787 13.1213C11.4413 13.6839 12.2044 14 13 14C13.7956 14 14.5587 13.6839 15.1213 13.1213C15.6839 12.5587 16 11.7956 16 11V2H19V0H14Z"
                fill="white"
              />
            </svg>
            Playlist #B
          </h4>
          <h4>
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0H0V2H12V0ZM12 4H0V6H12V4ZM0 10H8V8H0V10ZM14 0V8.18C13.69 8.07 13.35 8 13 8C12.2044 8 11.4413 8.31607 10.8787 8.87868C10.3161 9.44129 10 10.2044 10 11C10 11.7956 10.3161 12.5587 10.8787 13.1213C11.4413 13.6839 12.2044 14 13 14C13.7956 14 14.5587 13.6839 15.1213 13.1213C15.6839 12.5587 16 11.7956 16 11V2H19V0H14Z"
                fill="white"
              />
            </svg>
            Playlist #c
          </h4>
          <h4>
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0H0V2H12V0ZM12 4H0V6H12V4ZM0 10H8V8H0V10ZM14 0V8.18C13.69 8.07 13.35 8 13 8C12.2044 8 11.4413 8.31607 10.8787 8.87868C10.3161 9.44129 10 10.2044 10 11C10 11.7956 10.3161 12.5587 10.8787 13.1213C11.4413 13.6839 12.2044 14 13 14C13.7956 14 14.5587 13.6839 15.1213 13.1213C15.6839 12.5587 16 11.7956 16 11V2H19V0H14Z"
                fill="white"
              />
            </svg>
            Add New +
          </h4>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
