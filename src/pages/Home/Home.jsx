import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";

export default function Home(){
  return (
    <div className={`${styles.home}`}>
      <Navbar />
    </div>
  )
}

