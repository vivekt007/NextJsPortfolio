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
          src="/Icons/DevIcon.svg"
          alt="Design Icon"
          className={styles.icon}
        />
        Development
      </button>
      <div
        className={`${styles.box} ${
          isExpanded ? styles.expanded : styles.hidden
        }`}
      >
        <div className="skills-wrap-container">
        <p className="Skill-tag">HTML</p>
        <p className="Skill-tag">CSS</p>
        <p className="Skill-tag">JavaScript</p>
        <p className="Skill-tag">React</p>
        <p className="Skill-tag">Next.js</p>
        <p className="Skill-tag">Bootstrap</p>
        <p className="Skill-tag">Material UI</p>
        <p className="Skill-tag">Vercel</p>
        <p className="Skill-tag">GitHub</p>
        </div>
        
      </div>
    </div>
  );
};

export default ExpandableDiv;
