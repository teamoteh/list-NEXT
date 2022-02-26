import Head from "next/head";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About Me</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("My name is Timothy Lim and I like to code!")
              .pauseFor(1000)
              .deleteChars(8)
              .typeString("Software Engineering!")
              .pauseFor(1000)
              .deleteChars(21)
              .typeString("Bak Kut Teh!")
              .start();
          }}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum odio
          consequatur nihil neque quam, at suscipit libero vero commodi nisi
          consectetur temporibus quae molestiae, perferendis tenetur harum iure
          possimus atque?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum odio
          consequatur nihil neque quam, at suscipit libero vero commodi nisi
          consectetur temporibus quae molestiae, perferendis tenetur harum iure
          possimus atque?
        </p>
      </div>
    </>
  );
};

export default About;
