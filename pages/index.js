import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import types from "../styles/h1.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Timothy Lim | Hello World</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className = "nice">
        <h1 className={styles.title}>Hello World!</h1>
        <div className={styles.header}>
        <Typewriter
          options={{
          loop: true,
          deleteSpeed: 2,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("My name is Timothy Lim and I like to code!")
              .pauseFor(1000)
              .deleteChars(8)
              .typeString("Software Engineering!")
              .pauseFor(1000)
              .deleteChars(21)
              .typeString("Bak Kut Teh!")
              .pauseFor(3000)
              .start();
          }}
        />
        </div>  
        <Link href="/aboutme">
          <a className={styles.btn}>About Me!</a>
        </Link>
      </div>
    </>
  );
}
