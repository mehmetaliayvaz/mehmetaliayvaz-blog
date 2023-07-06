"use client";

import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@/app/icons/MenuIcon";
import CloseIcon from "@/app/icons/CloseIcon";

function Header({ className }) {
  const [showMenu, setShowMenu] = useState(false);

  const nav = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Photos", path: "/photos" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header className="md:absolute top-0 left-1/2 -translate-x-1/2 relative">
        <div className="container">
          <ul className="hidden md:flex justify-center py-10 text-lg space-x-10">
            {
              nav.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
          <button className="md:hidden absolute top-4 right-4 z-10" onClick={() => setShowMenu(true)}>
            <MenuIcon />
          </button>
        </div>
      </header>
      {
        showMenu && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-dark z-20">
            <div className="relative">
              <button className="absolute top-4 right-4 z-10" onClick={() => setShowMenu(false)}>
                <CloseIcon />
              </button>
              <ul className="py-20">
                {
                  nav.map((item, index) => (
                    <li key={index} className="py-2 text-center" onClick={() => setShowMenu(false)}>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Header;
