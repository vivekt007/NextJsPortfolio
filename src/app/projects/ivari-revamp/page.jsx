"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// designs
import iVariHome from "/public/designs/iVariRevamp/iVariHome.png";
import iVariAbout from "/public/designs/iVariRevamp/iVariAbout.png";
import iVariServices from "/public/designs/iVariRevamp/iVariServices.png";
import iVariProduct from "/public/designs/iVariRevamp/iVariProduct.png";
import FileIcon from "/public/Icons/FileIsIcon.svg?url";
import LinkIcon from "/public/Icons/link.svg?url";

// components
import Navbar from "@/app/Component/Navbar.jsx";
import Footer from "@/app/Component/Footer";

export default function IvariRevamp() {
  // Animations effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.project}>
      <div className={styles.projectContainer}>
        <Navbar />

        <div className={styles.projectTitle} id="heroSection">
          <div className={styles.projectName}>
            <h1>iVari Security Systems website revamp</h1>
            
            <Link href="/projects" className={styles.backButton}>
              ← Back to projects
            </Link>
          </div>
          <a
            href="/documents/iVariRevampDoc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.documentLink}
          >
            <Image 
              src={FileIcon}
              alt="File" 
              width={24} 
              height={24}
            />
            <span>DOCUMENTATION</span>
          </a>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Requirement Gathering</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Collaborated with internal teams to define objectives
              for the website redesign, ensuring alignment with the
              company's brand identity and business goals.
            </li>
            <li>
              Identified user pain points and areas for improvement in
              the existing website.
            </li>
          </ul>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Design</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Designed high-fidelity mockups in Figma, focusing on a
              modern, minimalistic aesthetic.
            </li>
            <li>
              Created responsive designs optimized for both desktop
              and mobile platforms.
            </li>
            <li>
              Ensured consistency with the company's branding,
              including color schemes, typography, and imagery.
            </li>
          </ul>
        </div>

        <div className={styles.projectImageRow}>
          <div className={styles.projectRowCol}>
            <Image
              src={iVariHome}
              alt="Home Page"
              width={500}
              height={300}
            />
            <Image
              src={iVariProduct}
              alt="Product Page"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.projectRowCol}>
            <Image
              src={iVariAbout}
              alt="About Page"
              width={500}
              height={300}
            />
            <Image
              src={iVariServices}
              alt="Services Page"
              width={500}
              height={300}
            />
            <a
              className={styles.webLink}
              href="https://www.ivari.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website</span>
              <Image 
                src={LinkIcon}
                alt="link" 
                width={24} 
                height={24}
              />
            </a>
          </div>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Development</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Translated designs into functional components using
              React.js.
            </li>
            <li>
              Implemented responsive layouts with CSS Grid, Flexbox,
              and media queries to ensure compatibility across
              devices.
            </li>
            <li>
              Incorporated interactive elements for enhanced user
              engagement.
            </li>
          </ul>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Deployment & Testing</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Deployed the website on Vercel, optimizing for
              performance and fast loading speeds.
            </li>
            <li>
              Conducted rigorous testing for responsiveness, browser
              compatibility, and usability.
            </li>
          </ul>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Outcome</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Delivered a modern, user-friendly website that elevated
              the company's online presence and improved user
              engagement.
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  );
} 