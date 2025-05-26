"use client";
import { useState, useEffect } from "react";
import styles from "./Work.module.css";

const images = [
  "/ProjectThumbnails/CampusBuy.png",
  "/ProjectThumbnails/CubeAssignment.png",
  "/ProjectThumbnails/Getmyjobs.png",
  "/ProjectThumbnails/IvariHrms.png",
  "/ProjectThumbnails/IvariRevamp.png",
  "/ProjectThumbnails/StonePaper.png",
];

export default function Work() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
          alt={`Slide ${index}`}
        />
      ))}
    </div>
  );
}
