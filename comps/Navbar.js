import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/aboutme">
        <a>About Me</a>
      </Link>
      <Link href="/ninjas">
        <a>Projects</a>
      </Link>
      <Link href="/contactme">
        <a>Contact Me</a>
      </Link>
    </nav>
  );
};

export default Navbar;
