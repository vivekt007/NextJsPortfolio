"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// designs
import getmyjobsHome from "/public/designs/Getmyjobs/Homepage.png";
import GetmyJobsLogin from "/public/designs/Getmyjobs/Loginpage.png";

// components
import Navbar from "@/app/Component/Navbar.jsx";
import Footer from "@/app/Component/Footer";

export default function Getmyjobs() {
  // Scroll to top on component load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.project}>
      <div className={styles.projectContainer}>
        <Navbar />

        <div className={styles.projectTitle} id="heroSection">
          <div className={styles.projectName}>
            <h1>Getmyjobs.in</h1>
            <Link href="/projects" className={styles.backButton}>
              ← Back to projects
            </Link>
          </div>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Requirement Gathering</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Partnered with stakeholders to identify the needs of two
              key user groups: job seekers and recruiters.
            </li>
            <li>
              Defined separate workflows for each user group to ensure
              a tailored experience, such as quick job search for
              seekers and streamlined posting tools for recruiters.
            </li>
            <li>
              Conducted user interviews and market research to
              understand industry trends and user pain points.
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
              Created comprehensive Figma designs focusing on
              accessibility and simplicity, particularly for
              non-technical users.
            </li>
            <li>
              Developed interfaces for key features like search
              filters, application tracking, and profile management.
            </li>
            <li>
              Designed a responsive layout optimized for both web and
              mobile users to maximize usability.
            </li>
          </ul>
        </div>

        <div className={styles.projectImageRow}>
          <div className={styles.projectRowCol}>
            <Image
              src={GetmyJobsLogin}
              alt="Login Page"
              width={500}
              height={350}
            />
          </div>
          <div className={styles.projectRowCol}>
            <Image
              src={getmyjobsHome}
              alt="Home Page"
              width={500}
              height={350}
            />
          </div>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Development</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Implemented the front-end using HTML, CSS, and
              JavaScript to deliver fast-loading, responsive, and
              visually engaging pages.
            </li>
            <li>
              Incorporated features like real-time updates for job
              applications and intuitive recruiter dashboards.
            </li>
            <li>
              Ensured browser compatibility and conducted extensive
              testing for a seamless experience across different
              platforms.
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
              Delivered an innovative job portal that offered ease of
              use for job seekers and recruiters, successfully
              connecting talent with opportunity. (Full designs are
              not shareable due to NDA)
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  );
} 