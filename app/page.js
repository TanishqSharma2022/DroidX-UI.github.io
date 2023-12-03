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
          dots: true,
        },
      },
    ],
  };

  return (
    <main className=" w-full h-full font-pj">
      {/* <Fade> */}
      <div className="  border border-black    mt-[-10vh] ">
        
     <div >
     

     <svg className="w-[200px] md:h-[200px] md:w-[370px]" viewBox="0 0 370 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  fill="url(#paint0_linear_11_78)">
<animate
attributeName="d"
dur="10s"
repeatCount="indefinite"
values="
M369.959 37.2061C369.959 152.889 276.19 201 160.519 201C44.8478 201 -88 134.007 -88 18.3236C-88 -97.3596 144.08 -221 259.751 -221C375.421 -221 369.959 -78.4772 369.959 37.2061Z;

M 283 136 C 256 190 275 184 22 187 C -10 186 -88 134.007 -88 18.3236 C -88 -97.3596 134 -212 300 -145 C 365 -97 386 -65 283 137 Z;
M 221 139 C 117 139 18 152 -38 103 C -96 45 -79 37 -71 -53 C -31 -135 181 -127 293 14 C 323 74 273 139 221 139 Z
"
></animate>
</path>
<defs>
<linearGradient id="paint0_linear_11_78" x1="-6.77038" y1="-125.71" x2="296.223" y2="143.442" gradientUnits="userSpaceOnUse">
<stop stop-color="#112F5D"/>
<stop offset="1" stop-color="#001AFF"/>
</linearGradient>
</defs>
</svg>

     </div>

        {/* </div> */}
        
        <div className="absolute mt-[100px] logo">
      
        <svg
        className="md:w-[500px] md:h-[688px] w-[300px] h-[300px]"
         
          viewBox="0 0 671 688"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.45">
            <path
              d="M328.095 33.1566H-118.095C-289.222 33.1566 -427.949 172.326 -427.949 344C-427.949 515.674 -289.222 654.843 -118.095 654.843H328.095C499.223 654.843 637.949 515.674 637.949 344C637.949 172.326 499.223 33.1566 328.095 33.1566Z"
              stroke="black"
              stroke-opacity="0.1"
              stroke-width="40"
            />
            <path
              d="M-118.095 484.916C-40.517 484.916 22.3723 421.826 22.3723 344C22.3723 266.174 -40.517 203.084 -118.095 203.084C-195.673 203.084 -258.562 266.174 -258.562 344C-258.562 421.826 -195.673 484.916 -118.095 484.916Z"
              stroke="black"
              stroke-opacity="0.1"
              stroke-width="40"
            />
            <path
              d="M328.095 484.916C405.673 484.916 468.562 421.826 468.562 344C468.562 266.174 405.673 203.084 328.095 203.084C250.517 203.084 187.628 266.174 187.628 344C187.628 421.826 250.517 484.916 328.095 484.916Z"
              stroke="black"
              stroke-opacity="0.1"
              stroke-width="40"
            />
          </g>
        </svg>
        
        </div>


        <div className="w-full  py-4 grid place-items-center">
        <div className="w-full  md:w-[90%]  md:grid   md:grid-cols-3 ">
        <div className="w-full grid   md:px-0 px-4  font-bold text-left  relative md:py-4   col-span-2 ">
            <h1 className="  text-2xl py-2 md:text-5xl  md:leading-[60px]">Heya 👋 <span className="font-light  text-black text-opacity-50">Welcome to</span>
            </h1>
            <h1 className="text-6xl md:text-[150px] py-2 md:leading-[190px]">DroidX-UI</h1>
            <p className=" py-4 text-sm pr-8 md:text-[25px] font-light md:leading-[31px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis vehicula arcu, quis maximus purus ornare eu. Integer sed ipsum a mi imperdiet iaculis. Aenean quis suscipit justo.</p>
            <div className="  w-full flex flex-col  md:justify-normal md:items-start justify-center items-center md:flex-row gap-6 py-6 ">
            <button className="flex gap-2 bg-primary bg-opacity-20 p-2 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[10px] border border-dashed border-primary">Read More
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_11_92)">
<g filter="url(#filter0_b_11_92)">
<path d="M0 13C0 16.4478 1.36964 19.7544 3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13Z" fill="#011BF1"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8572 7.42857C14.8572 7.92111 14.6615 8.39349 14.3132 8.74177C13.9649 9.09005 13.4926 9.28571 13 9.28571C12.5075 9.28571 12.0351 9.09005 11.6868 8.74177C11.3385 8.39349 11.1429 7.92111 11.1429 7.42857C11.1429 6.93602 11.3385 6.46365 11.6868 6.11537C12.0351 5.76709 12.5075 5.57143 13 5.57143C13.4926 5.57143 13.9649 5.76709 14.3132 6.11537C14.6615 6.46365 14.8572 6.93602 14.8572 7.42857ZM9.05359 18.5714C9.05359 17.9307 9.57359 17.4107 10.2143 17.4107H11.8393V13.2321H11.1429C10.835 13.2321 10.5398 13.1099 10.3221 12.8922C10.1044 12.6745 9.98216 12.3793 9.98216 12.0714C9.98216 11.7636 10.1044 11.4684 10.3221 11.2507C10.5398 11.033 10.835 10.9107 11.1429 10.9107H13C13.6407 10.9107 14.1607 11.4307 14.1607 12.0714V17.4107H15.7857C15.9382 17.4107 16.0891 17.4407 16.2299 17.4991C16.3707 17.5574 16.4987 17.6429 16.6065 17.7507C16.7143 17.8585 16.7998 17.9864 16.8581 18.1272C16.9164 18.2681 16.9464 18.419 16.9464 18.5714C16.9464 18.7239 16.9164 18.8748 16.8581 19.0156C16.7998 19.1564 16.7143 19.2844 16.6065 19.3922C16.4987 19.5 16.3707 19.5855 16.2299 19.6438C16.0891 19.7021 15.9382 19.7321 15.7857 19.7321H10.2143C9.90646 19.7321 9.61123 19.6098 9.39355 19.3922C9.17588 19.1745 9.05359 18.8793 9.05359 18.5714Z" fill="white"/>
</g>
<defs>
<filter id="filter0_b_11_92" x="-25" y="-25" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11_92"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11_92" result="shape"/>
</filter>
<clipPath id="clip0_11_92">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
            </svg>
            </button>
            <button className="flex gap-2  bg-primary bg-opacity-20 p-2 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[10px] border border-dashed border-primary">
              Download for your Device 
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
<g clip-path="url(#clip0_11_96)">
<g filter="url(#filter0_b_11_96)">
<path d="M0 13C0 16.4478 1.36964 19.7544 3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13Z" fill="#011BF1"/>
</g>
<path d="M13.6574 20.6217L18.8426 15.4347C18.9726 15.305 19.0613 15.1395 19.0973 14.9594C19.1334 14.7792 19.1151 14.5924 19.0449 14.4226C18.9748 14.2528 18.8558 14.1076 18.703 14.0055C18.5503 13.9033 18.3707 13.8488 18.187 13.8487H14.8571V6.96429C14.8571 6.47174 14.6615 5.99937 14.3132 5.65109C13.9649 5.30281 13.4925 5.10714 13 5.10714C12.5074 5.10714 12.0351 5.30281 11.6868 5.65109C11.3385 5.99937 11.1428 6.47174 11.1428 6.96429V13.8487H7.81299C7.62925 13.8488 7.44965 13.9033 7.29693 14.0055C7.14421 14.1076 7.02522 14.2528 6.95503 14.4226C6.88485 14.5924 6.86661 14.7792 6.90264 14.9594C6.93866 15.1395 7.02733 15.305 7.15742 15.4347L12.3426 20.6217C12.4288 20.7082 12.5313 20.7768 12.6441 20.8236C12.7569 20.8704 12.8778 20.8945 13 20.8945C13.1221 20.8945 13.2431 20.8704 13.3559 20.8236C13.4687 20.7768 13.5712 20.7082 13.6574 20.6217Z" fill="white"/>
</g>
<defs>
<filter id="filter0_b_11_96" x="-25" y="-25" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11_96"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11_96" result="shape"/>
</filter>
<clipPath id="clip0_11_96">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>

            </button>
            </div>
          </div>


          <div className="py-4 md:py-0 col-span-1 flex flex-col items-center justify-center w-full  ">
            <div className=" w-[200px] mob p-1 bg-[#8899a8] rounded-[25px] z-50">
            <img  src="/mobile.png" className="rounded-[20px] z-50 md:w-[250px] w-[200px]" />
            </div>
            <div className="logo ">
          <svg className="relative mt-[-200px] " width="300" viewBox="0 0 458 422" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M457.959 258.206C457.959 373.889 364.19 422 248.519 422C132.848 422 0 355.007 0 239.324C0 123.64 232.08 0 347.751 0C463.421 0 457.959 142.523 457.959 258.206Z" fill="url(#paint0_linear_11_77)"/>
<defs>
<linearGradient id="paint0_linear_11_77" x1="81.2296" y1="95.2903" x2="384.223" y2="364.442" gradientUnits="userSpaceOnUse">
<stop stop-color="#112F5D"/>
<stop offset="1" stop-color="#001AFF"/>
</linearGradient>
</defs>
</svg>
</div>
          </div>

          
          </div>
          
      </div>
      


{/* 
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
      </div> */}
      {/* <div className="dealing md:p-12 p-6 w-full flex flex-col justify-center items-center gap-7 ">
        <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1 place-items-center md:place-items-start  p-4 md:p-12 md:px-[100px] rounded-xl rounded-t-[50px] bg-secondary">
          <div className="py-6 md:p-1 flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[125px] md:h-[200px]"
              viewBox="0 0 640 512"
            >
              <path
                fill="white"
                d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm64 193.7v65.1l51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.3-85.9L66.8 320C54.8 308 48 291.7 48 274.7V186.6c0-32.4 26.2-58.6 58.6-58.6c24.1 0 46.5 12 59.9 32l47.4 71.1 10.1 5V160c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32v76.2l10.1-5L473.5 160c13.3-20 35.8-32 59.9-32c32.4 0 58.6 26.2 58.6 58.6v88.1c0 17-6.7 33.3-18.7 45.3l-79.4 79.4-14.3 85.9c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l15.2-90.9c1.6-9.9 6.3-19 13.4-26.1l51-51V241.7l-19 28.5c-4.6 7-11 12.6-18.5 16.3l-59.6 29.8c-2.4 1.3-4.9 2.2-7.6 2.8c-2.6 .6-5.3 .9-7.9 .8H256.7c-2.5 .1-5-.2-7.5-.7c-2.9-.6-5.6-1.6-8.1-3l-59.5-29.8c-7.5-3.7-13.8-9.4-18.5-16.3l-19-28.5zM2.3 468.1L50.1 348.6l49.2 49.2-37.6 94c-6.6 16.4-25.2 24.4-41.6 17.8S-4.3 484.5 2.3 468.1zM512 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm77.9 348.6l47.8 119.5c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-37.6-94 49.2-49.2z"
              />
            </svg>
          </div>
          <div className="md:col-span-2 p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl  text-center font-bold">
              Community Support
            </h1>
            <br />
            <p className="text-md">
              So this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh So
              this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh{" "}
            </p>
          </div>
        </div>
        <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1 place-items-center md:place-items-start p-4 md:p-12 md:px-[100px] rounded-xl bg-secondary">
          <div className="p-6 md:p-1 flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[125px] md:h-[200px]"
              viewBox="0 0 576 512"
            >
              <path
                fill="white"
                d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
              />
            </svg>
          </div>
          <div className="md:col-span-2 p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl  text-center font-bold">
              Android Version
            </h1>
            <br />
            <p className="text-md">
              So this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh So
              this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh{" "}
            </p>
          </div>
        </div>

        <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1 place-items-center md:place-items-start p-4 md:p-12 md:px-[100px] rounded-xl bg-secondary">
          <div className="p-6 md:p-1 flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[125px] md:h-[200px]"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M8 266.44C10.3 130.64 105.4 34 221.8 18.34c138.8-18.6 255.6 75.8 278 201.1 21.3 118.8-44 230-151.6 274-9.3 3.8-14.4 1.7-18-7.7q-26.7-69.45-53.4-139c-3.1-8.1-1-13.2 7-16.8 24.2-11 39.3-29.4 43.3-55.8a71.47 71.47 0 0 0-64.5-82.2c-39-3.4-71.8 23.7-77.5 59.7-5.2 33 11.1 63.7 41.9 77.7 9.6 4.4 11.5 8.6 7.8 18.4q-26.85 69.9-53.7 139.9c-2.6 6.9-8.3 9.3-15.5 6.5-52.6-20.3-101.4-61-130.8-119-24.9-49.2-25.2-87.7-26.8-108.7zm20.9-1.9c.4 6.6.6 14.3 1.3 22.1 6.3 71.9 49.6 143.5 131 183.1 3.2 1.5 4.4.8 5.6-2.3q22.35-58.65 45-117.3c1.3-3.3.6-4.8-2.4-6.7-31.6-19.9-47.3-48.5-45.6-86 1-21.6 9.3-40.5 23.8-56.3 30-32.7 77-39.8 115.5-17.6a91.64 91.64 0 0 1 45.2 90.4c-3.6 30.6-19.3 53.9-45.7 69.8-2.7 1.6-3.5 2.9-2.3 6q22.8 58.8 45.2 117.7c1.2 3.1 2.4 3.8 5.6 2.3 35.5-16.6 65.2-40.3 88.1-72 34.8-48.2 49.1-101.9 42.3-161-13.7-117.5-119.4-214.8-255.5-198-106.1 13-195.3 102.5-197.1 225.8z"
              />
            </svg>

          </div>
          <div className="md:col-span-2 p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl  text-center font-bold">
              Free and open
            </h1>
            <br />
            <p className="text-md">
              So this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh So
              this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh{" "}
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
              So this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh So
              this is a feature in DXUI and uhhh its cool and sexy and better
              than everyone else’s feature I’m running out of words ughhhhhh{" "}
            </p>
          </div>
        </div>
      </div> */}
      {/* </Fade> */}

      <div className="w-full h-[100vh] grid place-items-center ">
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
      </div>

    </main>
  );
}
