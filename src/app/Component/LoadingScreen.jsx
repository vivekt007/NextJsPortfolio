"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual content to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.hole}>
        {[...Array(10)].map((_, index) => (
          <i key={index}></i>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen; 