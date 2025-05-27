"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Navbar from "../Component/Navbar.jsx";
import Footer from "../Component/Footer.jsx";
import styles from "./Project.module.css";

// Imported Icons
import ForwardIcon from "/public/Icons/ForwardIcon.svg?url";
import LockIcon from "/public/Icons/LockIcon.svg?url";

// Imported Images
import IvariRevamp from "/public/ProjectThumbnails/IvariRevamp.png";
import IvariHRMS from "/public/ProjectThumbnails/IvariHrms.png";
import StonePaper from "/public/ProjectThumbnails/StonePaper.png";
import GetmyJobs from "/public/ProjectThumbnails/Getmyjobs.png";
import CampusBuy from "/public/ProjectThumbnails/CampusBuy.png";
import CubeAssignment from "/public/ProjectThumbnails/CubeAssignment.png";
import Careerpulse from "/public/ProjectThumbnails/Careerpulsethumbnail.png";
import BrassGlobe from "/public/ProjectThumbnails/BrassGlobe.png";

const Projects = () => {
  const router = useRouter();

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.projects}>
      <div className={styles["projects-row1"]}>
        <Navbar />
        <div className={styles["projects-r1-col1"]}>
          <h1>
            A designer interested in bridging the gap between designing and
            developing with help of AI
          </h1>
          <div className={styles["projects-holder"]}>
            <div
              className={styles["projects-block"]}
              onClick={() => router.push("/projects/ivari-revamp")}
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={IvariRevamp}
                  alt="Ivari Revamp Project"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Ivari Revamp <span>[Case study]</span>
                  </h3>
                  <p>
                    Redesigning the Ivari website to improve user experience and
                    modernize the interface.
                  </p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["projects-block"]}
              onClick={() => router.push("/projects/ivari-hrms")}
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={IvariHRMS}
                  alt="Iavri HRMS Project"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Ivari HRMS <span>[Project]</span>
                  </h3>
                  <p>
                    A comprehensive HR Management System that streamlines
                    employee management, attendance tracking, leave management,
                    and salary processing.
                  </p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["projects-block"]}
              onClick={() =>
                handleProjectClick(
                  "https://www.behance.net/gallery/210044533/Stone-Paper"
                )
              }
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={StonePaper}
                  alt="Ecommerce Project"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Stone Paper <span>[Project]</span>
                  </h3>
                  <p>
                    A sleek and user-friendly e-commerce website that
                    effectively communicated the brand's premium positioning
                    while boosting user engagement.
                  </p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["projects-block"]}
              onClick={() => router.push("/projects/getmyjobs")}
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={GetmyJobs}
                  alt="Getmyjobs Project"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Getmyjobs.in <span>[Project]</span>
                  </h3>
                  <p>
                    An innovative job portal that offered ease of use for job
                    seekers and recruiters, successfully connecting talent with
                    opportunity.
                  </p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["projects-block"]}
              onClick={() =>
                handleProjectClick(
                  "https://www.behance.net/gallery/193439937/Campus-Buy"
                )
              }
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={CampusBuy}
                  alt="CampusBuy"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Campus Buy <span>[Case study]</span>
                  </h3>
                  <p>My first case study while learning about UI UX</p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["projects-block"]}
              onClick={() =>
                handleProjectClick(
                  "https://www.behance.net/gallery/221019457/Case-Study-UIUX-Redesign-Mobile-Adaptation"
                )
              }
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={CubeAssignment}
                  alt="CubeAssignment"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Cube Assignment <span>[Design assignment]</span>
                  </h3>
                  <p>
                    A design challenge focused on revamping a website and making
                    it more user-friendly and responsive.
                  </p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["projects-block"]}
              onClick={() =>
                handleProjectClick(
                  "https://www.behance.net/gallery/195561159/Career-pulse"
                )
              }
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={Careerpulse}
                  alt="Career pulse"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Career Pulse <span>[Design assignment]</span>
                  </h3>
                  <p>
                    A career development platform design that helps
                    professionals track their growth and connect with
                    opportunities.
                  </p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["projects-block"]}
              onClick={() =>
                handleProjectClick(
                  "https://www.behance.net/gallery/196789459/Brass-Globe-redesign-assignment"
                )
              }
              role="button"
              tabIndex={0}
            >
              <div className={styles["projects-block-image"]}>
                <Image
                  src={BrassGlobe}
                  alt="Brass Globe"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className={styles["projects-block-details"]}>
                <div className={styles["projects-block-det-col1"]}>
                  <h3>
                    Brass Globe <span>[Design assignment]</span>
                  </h3>
                  <p>
                    Heuristic Evaluation of Brass Globe website to improve user
                    experience for desktop and mobile usability focusing on home
                    page and product page.
                  </p>
                </div>
                <div className={styles["projects-block-det-col2"]}>
                  <Image
                    src={ForwardIcon}
                    alt="Forward Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
