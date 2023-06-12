import Link from "next/link";

function Header({ className }) {
  return (
    <header className={className}>
      <div className="container">
        <ul className="flex py-5 text-lg space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about-contact">About - Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
