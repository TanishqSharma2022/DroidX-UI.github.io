"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/imgs/droidx-logo.jpeg";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <>
      <div className="w-full  font-inter flex items-center justify-between">
        <div className=" flex justify-center  ">
          <img src="@/assets/imgs/droid-logo.png" className="" />
        </div>
        <nav className=" p-7  font-inter font-bold text-lg gap-12 font-xl flex items-center justify-end invisible md:visible">
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
            <button className="p-4 border rounded-full border-primary">Try DroidX-UI</button>
          </Link>
        </nav>
      </div>
    </>
  );
}

// export default Navbar;
