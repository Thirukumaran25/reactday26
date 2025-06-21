import Image from "next/image";
import styles from "./page.module.css";
import Minipro1 from "@/components/Minipro1";
import Task7 from "@/components/Task7";
import Products from "@/components/Minipro2";
import Mainfile from "@/components/page";
import BlogList from "@/pages/blog";
import Profile from "@/pages/profile/[id]";
import About from "@/pages/about";


export default function Home() {
  return (
    <div className={styles.page}>
      <Task7/>
      <Minipro1/>
      <Products/>
      <Mainfile/>
      <BlogList/>
      <Profile/>
      <About/>
    
    </div>
  );
}
