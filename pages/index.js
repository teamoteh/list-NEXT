import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum odio
          consequatur nihil neque quam, at suscipit libero vero commodi nisi
          consectetur temporibus quae molestiae, perferendis tenetur harum iure
          possimus atque?
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum odio
          consequatur nihil neque quam, at suscipit libero vero commodi nisi
          consectetur temporibus quae molestiae, perferendis tenetur harum iure
          possimus atque?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
