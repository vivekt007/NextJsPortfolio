"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// components
import Navbar from "@/app/Component/Navbar.jsx";
import Footer from "@/app/Component/Footer";

// designs
// import iVariHome from "/designs/iVariHRMS/Home.png";
// import iVariSalary from "/designs/iVariHRMS/Salaryslips.png";
// import iVariLeave from "/designs/iVariHRMS/Leave.png";
// import iVariPunchIn from "/designs/iVariHRMS/PunchIn.png";
// import iVariSales from "/designs/iVariHRMS/SalesUpload.png";
// import iVariOutreach from "/designs/iVariHRMS/OutReach.png";
// import iVariDashboard from "/designs/iVariHRMS/HRMSDashboard.png";
// import iVariAttendance from "/designs/iVariHRMS/HRMSAttendance.png";
// import iVariDashboardLeave from "/designs/iVariHRMS/HRMSDashboardLeave.png";
// import iVariDashboardSales from "/designs/iVariHRMS/HRMSDashboardSales.png";
// import iVariDashboardSalary from "/designs/iVariHRMS/HRMSDashboardSalary.png";
// import iVariDashboardOutreach from "/designs/iVariHRMS/HRMSDashboardOutReach.png";

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
              src="/Designs/iVariHRMS/Home.png"
              alt="Home Page"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/PunchIn.png"
              alt="Punch In Page"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/Leave.png"
              alt="Leave Page"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/SalesUpload.png"
              alt="Sales Page"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/Salaryslips.png"
              alt="Salary Page"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/OutReach.png"
              alt="Outreach Page"
              width={500}
              height={300}
              priority
            />
          </div>
          <div className={styles.projectRowCol}>
            <Image
              src="/Designs/iVariHRMS/HRMSDashboard.png"
              alt="Dashboard"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/HRMSAttendance.png"
              alt="Attendance"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/HRMSDashboardLeave.png"
              alt="Dashboard Leave"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/HRMSDashboardSales.png"
              alt="Dashboard Sales"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/HRMSDashboardSalary.png"
              alt="Dashboard Salary"
              width={500}
              height={300}
              priority
            />
            <Image
              src="/Designs/iVariHRMS/HRMSDashboardOutReach.png"
              alt="Dashboard Outreach"
              width={500}
              height={300}
              priority
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
