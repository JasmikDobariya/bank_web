import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section>
      <div className="container mx-auto relative ">
        <div className="flex justify-between items-center">
          <div>
            <Image src="/images/logo.png" width={100} height={100} alt="logo" />
          </div>
          <ul className="flex gap-28 text-xl text-white">
            <li> <Link href="/">Home</Link></li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
