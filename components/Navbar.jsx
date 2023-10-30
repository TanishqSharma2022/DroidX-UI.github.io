"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/imgs/droidx-logo.jpeg";
import { Rotate as Hamburger } from 'hamburger-react'
import { useState } from "react";

export default function Navbar() {
  const pathName = usePathname();

const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className={`w-full  md:h-[16vh] h-[10vh] font-inter flex items-center justify-between`}>
        <div className=" flex justify-center items-center  ">
          <img src="@/assets/imgs/droid-logo.png" className="" />
        </div>
        <nav className=" p-7  font-inter font-bold text-lg gap-12 font-xl flex items-center justify-end invisible md:visible">
        <Link
            href="/"
            className={pathName == "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathName == "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            href="/changelog"
            className={pathName == "/changelog" ? "active" : ""}
          >
            Changelog
          </Link>
          {/* <Link href='/changelog' className={pathName == '/changelog' ? "active" : ""}>Changelog</Link> */}
          <Link
            href="/blog"
            className={pathName == "/blog" ? "active" : ""}
          >
            Blog
          </Link>
          <Link href="/team" className={pathName == "/team" ? "active" : ""}>
            Team
          </Link>
          <Link
            href="/download"
            className={pathName == "/download" ? "active" : ""}
          >
            <button className={`p-4 border rounded-full border-primary hover:bg-primary hover:text-white ${pathName == "/download" ? "text-white bg-primary" : "border-primary"}`}>Try DroidX-UI</button>
          </Link>
        </nav>
        <div className="absolute right-5 top-3  md:invisible visible  ">
          <Hamburger color="#3282B8" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className={`w-full border h-[100vh] absolute transition-all z-10 bg-secondary ${isOpen ? "top-[10vh]" : "top-[-100%]"}`}>
      <nav className="font-inter font-bold text-2xl gap-6   flex flex-col text-center mt-10 ">
          <Link
            href="/about"
            className={` rounded-full bg-primary text-gray-800  p-4  ${pathName == "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/changelog"
            className={` rounded-full bg-primary text-gray-800  p-4  ${pathName == "/changelog" ? "active" : ""}`}
          >
            Changelog
          </Link>
          {/* <Link href='/changelog' className={pathName == '/changelog' ? "active" : ""}>Changelog</Link> */}
          <Link
            href="/blog"
            className={` rounded-full bg-primary text-gray-800  p-4  ${pathName == "/blog" ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link href="/team" className={` rounded-full bg-primary text-gray-800  p-4  ${pathName == "/team" ? "active" : ""}`}
          >
            Team
          </Link>
          <Link
            href="/download"
            className={`col-span-2 ${pathName == "/download" ? "active" : ""}`}
          >
            <button className="p-4  border rounded-xl border-primary hover:bg-primary hover:text-white">Try DroidX-UI</button>
          </Link>
        </nav>
        </div>
    </>
  );
}

// export default Navbar;
