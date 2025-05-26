"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import GithubLastUpdate from "./GithubLastUpdate";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <GithubLastUpdate />
            <div className={styles["footer-col1"]}>
                <a 
                    href="https://github.com/vivekt007" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Github
                </a>
                <div className={styles["vertical-line"]}></div>
                <a 
                    href="https://www.instagram.com/vicky__67t/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                <div className={styles["vertical-line"]}></div>
                <a 
                    href="https://www.linkedin.com/in/vivek-tigadi/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
            <div className={styles["footer-col2"]}>
                <p>&copy; Vivek Tigadi {currentYear}. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}

export default Footer; 