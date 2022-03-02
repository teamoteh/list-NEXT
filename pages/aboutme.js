import Head from "next/head";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import styles from "../styles/h1.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About Timothy Lim</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1>About Me</h1>

        <div className={styles.image}>
          <Image
            className="image-wrapper"
            src="/photo6111707233957031763.jpg"
            alt="Picture of Me!"
            width={1000}
            height={800}
          />
        </div>

        <div className={styles.typewrite}>
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
        <p className={styles.para}>
          I am currently a Year 2 student in Nanyang Technological University
          and pursuing a bachelor in Computer Science. As a driven individual, I
          take it into my stride to pursue knowledge in areas that aren&apos;t
          covered in my school. I am open to opportunities that allow me to
          expand my horizons and provide me with new experiences to enjoy and
          environments for me to learn and grow. Let&apos;s connect!
        </p>
      </div>
      <div>
        <hr />
        <h2 className={styles.h2}>coursework</h2>
        <ul>
          <li>Languages: Python, Java, Javascript, C/C++, SQL</li>
          <li>Frameworks: React, Next, NODE</li>
          <li>
            Modules: Algorithms, Object-Oriented Design, Data Structures,
            Software Engineering, Full Stack Developent, Operating Systems, Data
            Analytics, Artificial Intelligience
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h2 className={styles.h2}>clubs & societies</h2>
        <ul>
          <li>A&apos; Division Saint Angrew&apos;s Rugby Team </li>
          <li> President of NTU Touch Rugby Men&apos;s</li>
          <li>Captain of Hall&apos;s Touch Rugby</li>
        </ul>
      </div>
      <hr />
      <div>
        <h2 className={styles.h2}>awards & accomplishments</h2>
        <ul>
          <li>MOE Academic Excellence Award</li>
          <li>Finalist MLDA Hackathon 2021</li>
          <li>National Colours Award</li>
        </ul>
      </div>
    </>
  );
};

export default About;
