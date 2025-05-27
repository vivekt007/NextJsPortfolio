"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// designs
import getmyjobsHome from "../../../public/designs/Getmyjobs/Homepage.png";
import GetmyJobsLogin from "../../../public/designs/Getmyjobs/Loginpage.png";

// components
import Navbar from "@/app/Component/Navbar.jsx";
import Footer from "@/app/Component/Footer";

export default function Getmyjobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.project}>
      <div className={styles.projectContainer}>
        <Navbar />

        <div className={styles.projectTitle} id="heroSection">
          <div className={styles.projectName}>
            <h1>GetMyJobs.in</h1>
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
              Collaborated with internal stakeholders to define platform goals,
              targeting both job seekers and recruiters.
            </li>
            <li>
              Conducted competitive research and user interviews to uncover
              friction points in job discovery and applicant screening.
            </li>
            <li>
              Mapped workflows for account setup, job search, and recruiter
              dashboards tailored to distinct user personas.
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
              Designed a clean, accessible, and mobile-friendly interface in
              Figma, optimized for first-time users.
            </li>
            <li>
              Focused on intuitive layouts for quick job search, resume uploads,
              recruiter filters, and easy job posting.
            </li>
            <li>
              Created both login and homepage flows for desktop and mobile
              views.
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
              Developed the frontend using HTML, CSS, and JavaScript, ensuring a
              responsive and performance-optimized experience.
            </li>
            <li>
              Integrated dynamic features like real-time application status and
              recruiter dashboard analytics.
            </li>
            <li>
              Ensured full mobile and cross-browser compatibility through
              iterative testing.
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
              Delivered a functional job platform that bridges the gap between
              job seekers and recruiters, enhancing the application process
              through streamlined UX. (Note: Full design not publicly shared due
              to NDA)
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  );
}
