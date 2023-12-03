"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Rotate as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import LoadingBar from 'react-top-loading-bar'

export default function Navbar() {
  const pathName = usePathname();

  const [isOpen, setOpen] = useState(false);
  const [progress, setProgress] = useState(0)

  return (
    <div className="font-pj z-[100]" >
    {/* <Fade> */}
    <LoadingBar color="#3282B8" progress={progress} waitingTime={800} onLoaderFinished={() => setProgress(0)} shadow={true} />

      <div
        className={` z-100 backdrop-blur-lg bg-[#D9D9D9] bg-opacity-20 w-full md:h-[10vh] h-[10vh] font-pj flex items-center justify-between`}
      >
        <div className="  flex justify-center items-center  ">
          <a className="text-white font-pj text-[25px] px-12">DroidX-UI</a>
          {/* <img
            src="/ss/logo.svg"
            className="h-[50px] md:h-[70px] absolute top-4 md:top-5 left-5"
          /> */}
        </div>
        
        <nav className="font-pj px-5 py-5 text-black text-opacity-50 text-[25px] gap-6 font-[25px] flex items-center justify-center  invisible md:visible absolute top-0 right-5" >
          <Link href="/" className={`hover:text-primary link  ${pathName == "/" ? "active" : ""} `} onClick={() => setProgress(100)}>
            Home
          </Link>
          <Link href="/about" className={`hover:text-primary link ${pathName == "/about" ? "active" : ""}`} onClick={() => setProgress(100)}>
            About
          </Link>
          <Link
            href="/changelog"
            className={`hover:text-primary link ${pathName == "/changelog" ? "active" : ""}`} onClick={() => setProgress(100)}
          >
            Changelog
          </Link>
          
          <Link href="/blog" className={`hover:text-primary link ${pathName == "/blog" ? "active" : ""}`} onClick={() => setProgress(100)}>
            Blog
          </Link>
          <Link href="/team" className={`hover:text-primary link ${pathName == "/team" ? "active" : ""}`} onClick={() => setProgress(100)}>
            Team
          </Link>
          <Link href="/download" className={`hover:text-primary link ${pathName == "/download" ? "active" : ""}`} onClick={() => setProgress(100)}>
            Download
          </Link>
          <Link href="/contact" className={`hover:text-primary link ${pathName == "/team" ? "active" : ""}`} onClick={() => setProgress(100)}>
            Contact
          </Link>
          {/* <Link
            href="/download"
            className={pathName == "/download" ? "active" : ""}
            onClick={() => setProgress(100)}
          >
            <button
              className={` p-[2px] h-12 w-36 rounded-full bg-gradient-to-r from-secondary to-primary   hover:bg-primary hover:text-white ${
                pathName == "/download"
                  ? "text-white bg-primary"
                  : "border-primary"
              }`}

            >
              <div className={` h-full w-full rounded-full  bg-gray-800 grid place-items-center hover:bg-gradient-to-r hover:from-darkersecondary hover:to-secondary 
              ${
                pathName == "/download"
                  ? "bg-gradient-to-r from-secondary to-primary"
                  : ""}`}>
              <h1>Try DroidX-UI</h1>
   
   </div>
            </button>
          </Link> */}
        </nav>
        <div className="absolute right-5 top-3  md:invisible visible  ">
          <Hamburger color="#011BF1" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {/* </Fade> */}

      <div
        className={`w-full  h-[100vh] absolute transition-all z-[100] backdrop-blur-lg bg-[#D9D9D9] bg-opacity-80  ${
          isOpen ? "top-[10vh]" : "top-[-100vh]"
        }`}
      >

        <nav className="font-pj font-bold text-4xl gap-6  flex flex-col text-center mt-10 z-[100] ">
        <Link
            href="/"
            className={` rounded-full  text-white link p-4  ${
              pathName == "/" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={` rounded-full  text-white link p-4  ${
              pathName == "/about" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            About
          </Link>
          <Link
            href="/changelog"
            className={` rounded-full  text-white link p-4  ${
              pathName == "/changelog" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Changelog
          </Link>

          
          <Link
            href="/blog"
            className={` rounded-full  text-white link p-4  ${
              pathName == "/blog" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Blog
          </Link>
          <Link
            href="/team"
            className={` rounded-full  text-white link p-4  ${
              pathName == "/team" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Team
          </Link>
          <Link
            href="/download"
            className={` rounded-full  text-white link p-4  ${
              pathName == "/download" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Download
          </Link>
          <Link
            href="/download"
            className={` rounded-full  text-white link p-4  ${
              pathName == "/contact" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Contact
          </Link>
          
        </nav>
      </div>
    </div>
  );
}

// export default Navbar;
