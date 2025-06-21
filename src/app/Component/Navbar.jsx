"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import myImage from "/public/MyImages/ProfilePicture.jpg";
import HomeIcon from "/public/Icons/HomeIcon.svg?url";
import { useTransitionRouter } from "next-view-transitions";

const Navbar = () => {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0%)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        // pseudoElement: "::view-transition-old(root)", 
        // keep it only if you know your browser supports it
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        { clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        // pseudoElement: "::view-transition-old(root)", // Remove or keep if you know your browser supports it
      }
    );
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-profile"]}>
        <a
          onClick={(e) => {
            e.preventDefault();
            router.push("/", {
              ontransitionReady: slideInOut,
            });
          }}
          href="/"
        >
          <Image src={myImage} alt="Profile" width={40} height={40} />
        </a>
        <div className={styles["navbar-det-col2"]}>
          <p>Vivek Tigadi</p>
          <span>UI UX Designer / Developer</span>
        </div>
      </div>

      <div className={styles["navbar-home"]}>
        <a
        onClick={(e) => {
          e.preventDefault();
          router.push("/", {
            ontransitionReady: slideInOut,
          });
        }}
        href="/">
          <Image src={HomeIcon} alt="Home" width={24} height={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
