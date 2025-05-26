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
          src="/Icons/DesignIcon.svg"
          alt="Design Icon"
          className={styles.icon}
        />
        Design
      </button>
      <div
        className={`${styles.box} ${
          isExpanded ? styles.expanded : styles.hidden
        }`}
      >
        <div className="skills-wrap-container">
          <p className="Skill-tag">User Interface</p>
          <p className="Skill-tag">User Experience</p>
          <p className="Skill-tag">Prototyping</p>
          <p className="Skill-tag">Wireframing</p>
          <p className="Skill-tag">Responsive Design</p>
          <p className="Skill-tag">User Research</p>
          <p className="Skill-tag">Branding</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableDiv;
