"use client";

import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Image from "next/image";

// Imported icons
import MyLogo from "/public/Icons/Logo.svg?url";
import myImage from "/public/MyImages/ProfilePicture.jpg";
import AvailableIcon from "/public/Icons/Available-icon.svg?url";
import LocationWhiteIcon from "/public/Icons/LocationIcon.svg?url";
import LocationIcon from "/public/Icons/LocationTagIcon.svg?url";
import ExperienceIcon from "/public/Icons/LinkedInTagIcon.svg?url";
import WorkIcon from "/public/Icons/WorkTagIcon.svg?url";
import GalleryIcon from "/public/Icons/GalleryTagIcon.svg?url";
import MailIcon from "/public/Icons/MailTagIcon.svg?url";
import LinkedInIcon from "/public/Icons/LinkedInSocialIcon.svg?url";
import BehanceIcon from "/public/Icons/BehanceSocialIcon.svg?url";
import InstagramIcon from "/public/Icons/InstagramSocialIcon.svg?url";

// Imported logos
import IvariLogo from "/public/Logo/iVariLogo.svg?url";
import DesignerrsLogo from "/public/Logo/DesignerrsLogo.png";
import HamdanLogo from "/public/Logo/HamdanInfocomLogo.png";

// Imported Jsx
import Gallery from "./Component/Gallery.jsx";
import WorkSlider from "./Component/WorkSlider.jsx";
import DesignAccordion from "./Component/DesignAccordion.jsx";
import DevAccordion from "./Component/DevAccordion.jsx";
import ToolsAccordian from "./Component/ToolsAccordian.jsx";
import OthersAccordian from "./Component/OthersAccordian.jsx";

export default function Home() {
  const ExpandSkillBlock = () => {};

  const currentYear = new Date().getFullYear();

  const [result, setResult] = useState("");
  const formRef = useRef(null);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "310a6ec8-3b3d-4ce6-b334-8c7152ec6914");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Thank You",
        text: "Message sent",
        icon: "success",
        timer: 1500,
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="home">
      <div className="home-col1">
        <div className="home-c1-row1">
          <Image
            src={myImage}
            alt="Hero background"
            width={110}
            height={110}
            priority
            className="home-c1-r1-r1 Profile-picture object-cover"
          />

          <div className="home-c1-r1-r2">
            <h1>
              Hello I'm Vivek Tigadi - User Experience Designer.{" "}
              <span className="Grey-2">Previously a Front-end Developer.</span>
            </h1>
            <p>
              A designer obsessed with creating digital experiences and I can
              code too! I believe good design is as simple and minimal as
              possible.
            </p>
          </div>
          <div className="home-c1-r1-r3">
            <div className="home-c1-r1-r3-col1">
              <Image
                src={LocationWhiteIcon}
                alt="Available Icon"
                width={16}
                height={16}
              />
              <p>Bengaluru, Mumbai, Pune</p>
            </div>
            <div className="home-c1-r1-r3-col2">
              <Image
                src={AvailableIcon}
                alt="Available Icon"
                width={16}
                height={16}
              />
              <p>Available for work</p>
            </div>
          </div>
        </div>

        <div className="home-c1-row2">
          <div className="home-c1-r2-row1">
            <div className="home-c1-r2-r1-col1 portfolio-block">
              <div className="home-r2-header">
                <div className="home-r2-header-tag">
                  <Image
                    src={ExperienceIcon}
                    alt="Experience Icon"
                    width={12}
                    height={12}
                  />
                  <p>EXPERIENCE</p>
                </div>
              </div>
              <div className="exp-container">
                <div className="exp-container-row1">
                  <div className="exp-container-r1-col1 exp-comp-logo-container">
                    <Image
                      src={IvariLogo}
                      alt="Ivari Logo"
                      width={32}
                      height={32}
                      className="exp-comp-logo"
                    />
                  </div>
                  <div className="exp-container-r1-col2">
                    <div className="exp-container-r1-c1-row1 exp-title">
                      <h6>
                        UI UX Designer <span>Full time</span>
                      </h6>
                    </div>
                    <div className="exp-container-r1-c1-row2 exp-comp-details">
                      <a href="https://www.ivari.in/">iVari</a>
                      <p>|</p>
                      <span>May 24 - Mar 25</span>
                    </div>
                  </div>
                </div>
                <div className="exp-container-row2">
                  <div className="exp-container-r2-col1 exp-comp-logo-container">
                    <Image
                      src={DesignerrsLogo}
                      alt="Designerrs Logo"
                      width={32}
                      height={32}
                      className="exp-comp-logo"
                    />
                  </div>
                  <div className="exp-container-r2-col2">
                    <div className="exp-container-r2-c1-row1 exp-title">
                      <h6>
                        UI UX Design <span>Course</span>
                      </h6>
                    </div>
                    <div className="exp-container-r2-c1-row2 exp-comp-details">
                      <a href="https://designerrs.com/designerrs-certification/000d87-vivek-tigadi/">
                        Designerrs
                      </a>
                      <p>|</p>
                      <span>Nov 23 - Mar 24</span>
                    </div>
                  </div>
                </div>
                <div className="exp-container-row3">
                  <div className="exp-container-r3-col1 exp-comp-logo-container">
                    <Image
                      src={HamdanLogo}
                      alt="Hamdan Logo"
                      width={32}
                      height={32}
                      className="exp-comp-logo"
                    />
                  </div>
                  <div className="exp-container-r3-col2">
                    <div className="exp-container-r3-c1-row1 exp-title">
                      <h6>
                        Front End Dev <span>Intern</span>
                      </h6>
                    </div>
                    <div className="exp-container-r3-c1-row2 exp-comp-details">
                      <a href="https://hamdaninfocom.in/">Hamdan</a>
                      <p>|</p>
                      <span>Oct 22 - Nov 22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="home-c1-r2-r1-col2 portfolio-block"
              onClick={() => router.push("/projects")}
            >
              <div className="home-r2-header">
                <div className="home-r2-header-tag">
                  <Image
                    src={WorkIcon}
                    alt="Work Icon"
                    width={12}
                    height={12}
                  />
                  <p>WORK</p>
                </div>
              </div>
              <WorkSlider />
            </div>
            <div className="home-c1-r2-r1-col3 portfolio-block">
              <div className="home-r2-header">
                <div className="home-r2-header-tag">
                  <Image
                    src={LocationIcon}
                    alt="Location Icon"
                    width={12}
                    height={12}
                  />
                  <p>MAP</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236860.71332812856!2d77.46612573821041!3d12.954280236682722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1745168872219!5m2!1sen!2sin"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="home-c1-r2-row2">
            <div className="home-c1-r2-r2-col1 portfolio-block">
              <div className="home-r2-header">
                <div className="home-r2-header-tag">
                  <Image
                    src={GalleryIcon}
                    alt="gallery Icon"
                    width={12}
                    height={12}
                  />
                  <p>GALLERY</p>
                </div>
              </div>
              <Gallery />
            </div>
            <div className="home-c1-r2-r2-col2 portfolio-block">
              <div className="home-r2-header">
                <div className="home-r2-header-tag">
                  <Image
                    src={MailIcon}
                    alt="Mail Icon"
                    width={12}
                    height={12}
                  />
                  <p>CONTACT</p>
                </div>
              </div>

              <div className="Contact-form">
                <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                  <div className="user-inputs">
                    <div className="input-name contact-input-field">
                      <p>Hey, my name is </p>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="border p-2 w-full"
                      />
                    </div>

                    <div className="input-subject contact-input-field">
                      <p>and I'm here for </p>
                      <textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        className="border p-2 w-full"
                      ></textarea>
                    </div>

                    <div className="input-emailid contact-input-field">
                      <p>Get in touch with me at</p>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="border p-2 w-full"
                      />
                    </div>
                  </div>

                  <div className="Contact-cta">
                    <button className="cta-button">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            />
                          </svg>
                        </div>
                      </div>
                      <span>Send</span>
                    </button>
                  </div>
                </form>

                <span className="block mt-2 text-sm text-gray-600">
                  {result}
                </span>
              </div>

              <p className="copy-rights">
                © VIvek Tigadi {currentYear}. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-col2">
        <div className="home-c2-row1">
        <iframe src='https://my.spline.design/robotarm-MLAnY9h7KVS7jetxUohM1yfp/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
        <div className="Skills-block">
          <DesignAccordion />
          <DevAccordion />
          <ToolsAccordian />
          <OthersAccordian />
        </div>
        <div className="socials">
          <div className="socials-row1">
            <div className="socials-r1-block1">
              <a href="https://www.behance.net/vivektigadi" target="_blank">
                <Image
                  src={BehanceIcon}
                  alt="Behance Icon"
                  width={60}
                  height={60}
                />
              </a>
            </div>
            <div className="socials-r1-block2">
              <a
                href="https://www.linkedin.com/in/vivek-tigadi/"
                target="_blank"
              >
                <Image
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                  width={60}
                  height={60}
                />
              </a>
            </div>
            <div className="socials-r1-block3">
              <a href="https://www.instagram.com/vicky__67t/" target="_blank">
                <Image
                  src={InstagramIcon}
                  alt="Instagram Icon"
                  width={60}
                  height={60}
                />
              </a>
            </div>
          </div>
          <div className="socials-row2">
            <div className="socials-r2-block1">
              <a href="https://www.vivektigadi.com/">
                <Image src={MyLogo} alt="My Logo" width={60} height={60} />
              </a>
            </div>
            <div className="socials-r2-block2">
              <a
                href="https://drive.google.com/file/d/1gBFBvfQv65RYFzPqDcTwwG6wDKs_M2pZ/view?usp=drive_link"
                target="_blank"
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
