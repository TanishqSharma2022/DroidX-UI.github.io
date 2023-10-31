"use client";

import { Fade } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

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
        <div className="dealing md:p-12 p-6 w-full flex flex-col  justify-center items-center gap-7 ">
          <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1  p-4 md:p-12 md:px-[100px] rounded-xl rounded-t-[50px] bg-secondary">
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
          <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1  p-4 md:p-12 md:px-[100px] rounded-xl bg-secondary">
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
          <div className="md:w-[90%] w-[100%] grid md:grid-cols-3 grid-cols-1  p-4 md:p-12 md:px-[100px] rounded-xl bg-secondary">
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
