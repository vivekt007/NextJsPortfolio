"use client";
import { useState, useEffect } from "react";
import styles from "../Gallery.module.css";

const images = [
  "/MyImages/Vivek2.jpg",
  "/MyImages/Vivek3.jpeg",
  "/MyImages/Vivek4.jpg",
  "/MyImages/Vivek5.jpg",
  "/MyImages/Vivek6.jpg",
  "/MyImages/Vivek7.jpeg",
  "/MyImages/Vivek8.jpg",
  "/MyImages/ProfilePicture.jpg",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

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
