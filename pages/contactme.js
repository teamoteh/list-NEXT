import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Ninjas.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>teamoteh | Contact Me</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Contact Me</h1>
        <div className={styles.single}>
          <Image src="/174857.png" width={70} height={70} />
          <h2>
            <a
              href="https://www.linkedin.com/in/timothy-lim1473/"
              className="linkalign"
            >
              LinkedIn: Timothy Lim
            </a>
          </h2>
        </div>
        <div className={styles.single}>
          <Image src="/GitHub-Mark.png" width={77} height={77} />
          <h2>
            <a href="https://github.com/teamoteh" className="linkalign">
              Github: teamoteh
            </a>
          </h2>
        </div>
        <div className={styles.single}>
          <Image src="/281769.png" width={77} height={77} />
          <h2>
            Email: <a className="linkalign">teamoteh@gmail.com</a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
