"use client";

import { Fade } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <main className=" w-full h-full ">
      <Fade>
        <div className="    w-full  h-[75vh] 2xl:h-[50vh] ">
          <div className=" relative md:left-[50%] left-[0%] md:top-0 top-[30%] w-[100%] md:w-[50%] text-3xl md:text-6xl font-bold text-left h-[85vh] px-[80px] md:leading-[4.2rem] md:py-[100px] ">
            Spice up your Android experience with{" "}
            <span className="text-primary">DroidX-UI</span>
          </div>

          {/* <div className=" absolute border  brightness-90 top-[100px] left-0 flex gap-[60px] py-[100px] w-full  md:h-[80vh]  h-full  ">
          <div className="sq1 w-[500px] md:w-[250px] h-full rotate-[30deg] shadow-lg  bg-secondary rounded-3xl"></div>
          <div className="sq1 w-[250px] h-[60vh] rotate-[30deg] ml-12 shadow-lg bg-secondary rounded-3xl"></div>
          <div className="sq1 w-[250px] h-[60vh] rotate-[30deg] invisible md:visible  shadow-lg ml-12 bg-secondary rounded-3xl"></div>
          <div className="sq1 w-[250px] h-[60vh] rotate-[30deg] invisible md:visible shadow-lg ml-12 bg-secondary rounded-3xl"></div>
        </div> */}
        </div>
        <div className="bharosa flex justify-evenly items-center w-full md:p-12   text-2xl font-bold">
          <div className="md:p-12 py-12 ">
            <div className="text-primary md:text-5xl">30+</div>
            <div className="text-lg md:text-2xl  ">
              Supported
              <br /> Devices
            </div>
          </div>
          <div className="md:p-12  ">
            <div className="text-primary md:text-5xl">420+</div>
            <div className="text-lg md:text-2xl  ">
              Happy
              <br /> DXUI users
            </div>
          </div>
          <div className="md:p-12  ">
            <div className="text-primary md:text-5xl">20+</div>
            <div className="text-lg md:text-2xl  ">
              Active
              <br /> Developers
            </div>
          </div>
        </div>
        <div className="dealing md:p-12 p-6 w-full flex flex-col justify-center items-center gap-7 ">
          <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1 place-items-center md:place-items-start  p-4 md:p-12 md:px-[100px] rounded-xl rounded-t-[50px] bg-secondary">
            <div className="py-6 md:p-1 flex justify-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[125px] md:h-[200px]" viewBox="0 0 640 512">
              <path fill="white" d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm64 193.7v65.1l51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.3-85.9L66.8 320C54.8 308 48 291.7 48 274.7V186.6c0-32.4 26.2-58.6 58.6-58.6c24.1 0 46.5 12 59.9 32l47.4 71.1 10.1 5V160c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32v76.2l10.1-5L473.5 160c13.3-20 35.8-32 59.9-32c32.4 0 58.6 26.2 58.6 58.6v88.1c0 17-6.7 33.3-18.7 45.3l-79.4 79.4-14.3 85.9c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l15.2-90.9c1.6-9.9 6.3-19 13.4-26.1l51-51V241.7l-19 28.5c-4.6 7-11 12.6-18.5 16.3l-59.6 29.8c-2.4 1.3-4.9 2.2-7.6 2.8c-2.6 .6-5.3 .9-7.9 .8H256.7c-2.5 .1-5-.2-7.5-.7c-2.9-.6-5.6-1.6-8.1-3l-59.5-29.8c-7.5-3.7-13.8-9.4-18.5-16.3l-19-28.5zM2.3 468.1L50.1 348.6l49.2 49.2-37.6 94c-6.6 16.4-25.2 24.4-41.6 17.8S-4.3 484.5 2.3 468.1zM512 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm77.9 348.6l47.8 119.5c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-37.6-94 49.2-49.2z"/></svg>
            </div>
            <div className="md:col-span-2 p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl  text-center font-bold">
                Community Support
              </h1>
              <br />
              <p className="text-md">
                So this is a feature in DXUI and uhhh its cool and sexy and
                better than everyone else’s feature I’m running out of words
                ughhhhhh So this is a feature in DXUI and uhhh its cool and sexy
                and better than everyone else’s feature I’m running out of words
                ughhhhhh{" "}
              </p>
            </div>
          </div>
          <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1 place-items-center md:place-items-start p-4 md:p-12 md:px-[100px] rounded-xl bg-secondary">
            <div className="p-6 md:p-1 flex justify-center items-center ">
            {/* <img src="/android.svg"  className="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[125px] md:h-[200px]" viewBox="0 0 576 512">
              <path fill="white" d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/></svg>
            </div>
            <div className="md:col-span-2 p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl  text-center font-bold">
                Android Version
              </h1>
              <br />
              <p className="text-md">
                So this is a feature in DXUI and uhhh its cool and sexy and
                better than everyone else’s feature I’m running out of words
                ughhhhhh So this is a feature in DXUI and uhhh its cool and sexy
                and better than everyone else’s feature I’m running out of words
                ughhhhhh{" "}
              </p>
            </div>
          </div>
          <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1 place-items-center md:place-items-start p-4 md:p-12 md:px-[100px] rounded-xl bg-secondary">
            <div className="p-6 md:p-1 flex justify-center items-center ">
            {/* <Image src="/osi.svg" width={48} height={48} className="text-white border-white fill-white" alt="icon" priority   /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[125px] md:h-[200px]" viewBox="0 0 512 512" >
              <path fill="#ffffff" d="M8 266.44C10.3 130.64 105.4 34 221.8 18.34c138.8-18.6 255.6 75.8 278 201.1 21.3 118.8-44 230-151.6 274-9.3 3.8-14.4 1.7-18-7.7q-26.7-69.45-53.4-139c-3.1-8.1-1-13.2 7-16.8 24.2-11 39.3-29.4 43.3-55.8a71.47 71.47 0 0 0-64.5-82.2c-39-3.4-71.8 23.7-77.5 59.7-5.2 33 11.1 63.7 41.9 77.7 9.6 4.4 11.5 8.6 7.8 18.4q-26.85 69.9-53.7 139.9c-2.6 6.9-8.3 9.3-15.5 6.5-52.6-20.3-101.4-61-130.8-119-24.9-49.2-25.2-87.7-26.8-108.7zm20.9-1.9c.4 6.6.6 14.3 1.3 22.1 6.3 71.9 49.6 143.5 131 183.1 3.2 1.5 4.4.8 5.6-2.3q22.35-58.65 45-117.3c1.3-3.3.6-4.8-2.4-6.7-31.6-19.9-47.3-48.5-45.6-86 1-21.6 9.3-40.5 23.8-56.3 30-32.7 77-39.8 115.5-17.6a91.64 91.64 0 0 1 45.2 90.4c-3.6 30.6-19.3 53.9-45.7 69.8-2.7 1.6-3.5 2.9-2.3 6q22.8 58.8 45.2 117.7c1.2 3.1 2.4 3.8 5.6 2.3 35.5-16.6 65.2-40.3 88.1-72 34.8-48.2 49.1-101.9 42.3-161-13.7-117.5-119.4-214.8-255.5-198-106.1 13-195.3 102.5-197.1 225.8z"/>
              </svg>
            {/* <FontAwesomeIcon icon={solid("osi")} /> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"></svg> */}
              
            </div>
            <div className="md:col-span-2 p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl  text-center font-bold">
                Free and open
              </h1>
              <br />
              <p className="text-md">
                So this is a feature in DXUI and uhhh its cool and sexy and
                better than everyone else’s feature I’m running out of words
                ughhhhhh So this is a feature in DXUI and uhhh its cool and sexy
                and better than everyone else’s feature I’m running out of words
                ughhhhhh{" "}
              </p>
            </div>
          </div>
          <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1  p-4 md:p-12 md:px-[100px] rounded-xl rounded-b-[50px] bg-secondary">
            <div>img</div>
            <div className="md:col-span-2 p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl  text-center font-bold">
                Community Support
              </h1>
              <br />
              <p className="text-md">
                So this is a feature in DXUI and uhhh its cool and sexy and
                better than everyone else’s feature I’m running out of words
                ughhhhhh So this is a feature in DXUI and uhhh its cool and sexy
                and better than everyone else’s feature I’m running out of words
                ughhhhhh{" "}
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <div className="w-full grid place-items-center ">
        <div>
          <p className="md:text-5xl text-3xl font-bold py-12">Screenshots</p>
        </div>
        <div className="md:w-[100vh] md:max-w-[100vh] max-w-[50vh] w-[50vh]  ">
          <Slider {...settings}>
            <div className="p-4">
              <img className="object-contain " src="/ss/1.jpg" />
            </div>
            <div className="p-4">
              <img className=" " src="/ss/2.jpg" />
            </div>
            <div className="p-4">
              <img className=" object-contain" src="/ss/3.jpg" />
            </div>
            <div className="p-4">
              <img className=" object-contain" src="/ss/4.jpg" />
            </div>
            <div className="p-4">
              <img className=" object-contain" src="/ss/5.jpg" />
            </div>
            <div className="p-4">
              <img className=" object-contain" src="/ss/6.jpg" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="w-full mt-12 h-[60vh] p-12">
        <h1 className="text-3xl font-bold">And many things very soon....</h1>
      </div>
    </main>
  );
}
