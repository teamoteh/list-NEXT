import Head from "next/head";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import styles from "../styles/h1.module.css";
import PostImage from "./Picture";



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
            <Image className="image-wrapper"
            src ="/photo6111707233957031763.jpg"
            alt = "Picture of Me!"
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
        <p className = {styles.para}>
          I am currently a Year 2 student in Nanyang Technological University and 
          pursuing a bachelor in Computer Science. As a driven individual, I take
          it into my stride to pursue knowledge in areas that aren't covered in my
          school. I am open to opportunities that allow me to expand my horizons and
          provide me with new experiences to enjoy and environments for me to learn 
          and grow. Let's connect!
        </p>
      </div>
      <div>
      <h2>dad very fat</h2>
      </div>
    </>
  );
};

export default About;
