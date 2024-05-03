import styles from "./Navbar.module.scss";
import logoImg from '../../assets/Images/logo.png';
import searchIcn from '../../assets/Images/search_icon.svg'
import bellIcn from '../../assets/Images/bell_icon.svg'
import profileIcn from '../../assets/Images/profile_img.png'
import dropIcn from '../../assets/Images/caret_icon.svg'


export default function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.navbarLeft}`}>
        <img src={logoImg} alt="Logo-Icon" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className={`${styles.navbarRight}`}>
        <img src={searchIcn} alt="search" className={styles.icon} />
        <p>Children</p>
        <img src={bellIcn} alt="notification" className={styles.icon} />
        <div className={`${styles.navbarProfile}`}>
          <img src={profileIcn} alt="profile" className={styles.profile} />
          <img src={dropIcn} alt="dropdown"/>
        </div>
      </div>
    </div>
  )
}


