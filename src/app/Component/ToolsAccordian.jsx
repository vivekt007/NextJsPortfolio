import React, { useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";
import "../globals.css";

// Import Icons

const ExpandableDiv = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="Skils-container">
      <button onClick={toggleExpand} className={styles.button}>
        <img
          src="/Icons/ToolsIcon.svg"
          alt="Tools Icon"
          className={styles.icon}
        />
        Tools
      </button>
      <div
        className={`${styles.box} ${
          isExpanded ? styles.expanded : styles.hidden
        }`}
      >
        <div className="skills-wrap-container">
        <p className="Skill-tag">Figma</p>
        <p className="Skill-tag">Framer</p>
        <p className="Skill-tag">Photopea</p>
        <p className="Skill-tag">Spline</p>
        </div>
        
      </div>
    </div>
  );
};

export default ExpandableDiv;
