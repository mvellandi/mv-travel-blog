import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import React from "react";

// So React complains about giving refs to <Link> children that are functional components
// Here, it's the link on the logo.
// Next docs recommend the following:
// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
//
// eslint-disable-next-line react/display-name
const Logo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={logo} alt="Travel Blog Logo" />
    </a>
  );
});

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>
      <div className="nav-item-container">
        <p>XXXXX</p>
      </div>
    </nav>
  );
};

export default NavBar;
