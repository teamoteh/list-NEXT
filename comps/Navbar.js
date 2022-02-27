import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo1.png" width={120} height={100} quality={100}
        href="/"
        />
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
