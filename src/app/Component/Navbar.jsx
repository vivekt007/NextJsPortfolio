import Image from "next/image";
import styles from "./Navbar.module.css";
import myImage from "/public/MyImages/ProfilePicture.jpg"; 
import HomeIcon from "/public/Icons/HomeIcon.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-profile"]}>
        <Image
          src={myImage}
          alt="Profile"
          width={40}
          height={40}
        />
        <div className={styles["navbar-det-col2"]}>
          <p>Vivek Tigadi</p>
          <span>UI UX Designer / Developer</span>
        </div>
      </div>

      <div className={styles["navbar-home"]}>
        <a href="/">
          <Image
            src={HomeIcon}
            alt="Home"
            width={24}
            height={24}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

