"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// components
import Navbar from "@/app/Component/Navbar.jsx";
import Footer from "@/app/Component/Footer";

// designs
import iVariHome from "/public/designs/iVariHRMS/Home.png";
import iVariSalary from "/public/designs/iVariHRMS/Salaryslips.png";
import iVariLeave from "/public/designs/iVariHRMS/Leave.png";
import iVariPunchIn from "/public/designs/iVariHRMS/PunchIn.png";
import iVariSales from "/public/designs/iVariHRMS/SalesUpload.png";
import iVariOutreach from "/public/designs/iVariHRMS/OutReach.png";
import iVariDashboard from "/public/designs/iVariHRMS/HRMSDashboard.png";
import iVariAttendance from "/public/designs/iVariHRMS/HRMSAttendance.png";
import iVariDashboardLeave from "/public/designs/iVariHRMS/HRMSDashboardLeave.png";
import iVariDashboardSales from "/public/designs/iVariHRMS/HRMSDashboardSales.png";
import iVariDashboardSalary from "/public/designs/iVariHRMS/HRMSDashboardSalary.png";
import iVariDashboardOutreach from "/public/designs/iVariHRMS/HRMSDashboardOutReach.png";

export default function IvariHRMS() {
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
            <h1>iVari HRMS</h1>
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
              Worked closely with the HR team to define core features and
              workflows for employee and admin dashboards.
            </li>
            <li>
              Conducted detailed analysis of existing HR processes, identifying
              pain points such as manual leave tracking, document management
              inefficiencies, and fragmented communication channels.
            </li>
            <li>
              Outlined a comprehensive list of functionalities to ensure a
              smoother and more efficient HR workflow.
            </li>
          </ul>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectHeading}>
            <div className={styles.homeVl}></div>
            <p>Research & Planning</p>
          </div>

          <ul className={styles.projectText}>
            <li>
              Designed user flows for both employee and admin personas, ensuring
              seamless navigation and role-specific accessibility.
            </li>
            <li>
              Strategically planned features like attendance tracking, leave
              applications, document downloads, and sales data updates for
              usability and practicality.
            </li>
            <li>
              Mapped out a modular system to accommodate future scalability and
              additional features.
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
              Designed high-fidelity Web and mobile pages in Figma tailored to
              distinct workflows for employees and adminis.
            </li>
            <li>
              Ensured design consistency through standardized typography,
              colors, and layout grids.
            </li>
            <li>
              Focused on a user-centric approach, prioritizing simplicity and
              ease of use across all devices.
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
              src={iVariPunchIn}
              alt="Punch In Page"
              width={500}
              height={300}
            />
            <Image
              src={iVariLeave}
              alt="Leave Page"
              width={500}
              height={300}
            />
            <Image
              src={iVariSales}
              alt="Sales Page"
              width={500}
              height={300}
            />
            <Image
              src={iVariSalary}
              alt="Salary Page"
              width={500}
              height={300}
            />
            <Image
              src={iVariOutreach}
              alt="Outreach Page"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.projectRowCol}>
            <Image
              src={iVariDashboard}
              alt="Dashboard"
              width={500}
              height={300}
            />
            <Image
              src={iVariAttendance}
              alt="Attendance"
              width={500}
              height={300}
            />
            <Image
              src={iVariDashboardLeave}
              alt="Dashboard Leave"
              width={500}
              height={300}
            />
            <Image
              src={iVariDashboardSales}
              alt="Dashboard Sales"
              width={500}
              height={300}
            />
            <Image
              src={iVariDashboardSalary}
              alt="Dashboard Salary"
              width={500}
              height={300}
            />
            <Image
              src={iVariDashboardOutreach}
              alt="Dashboard Outreach"
              width={500}
              height={300}
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
              Built the system's front-end with HTML, CSS, and JavaScript,
              ensuring a responsive and visually appealing interface.
            </li>
            <li>
              Integrated interactive features such as dynamic dashboards,
              real-time data updates, and intuitive navigation tools.
            </li>
            <li>
              Ensured cross-browser and multi-device compatibility for flawless
              user experience.
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
              Delivered a fully functional HR management portal that simplified
              routine tasks, enhanced communication between employees and
              admins, and streamlined overall operations.
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  );
}
