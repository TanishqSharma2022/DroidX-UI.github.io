"use client";

import Devices from "@/DeviceFiles/alldevices";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Page from "./[codename]/page";
import Loading from "@/components/Loading";

export default function Download() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/DroidX-UI-Devices/Official_Devices/13/website.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.devices);
        setDevice(data.devices);
        console.log(data)
        setLoading(false)
      });
  }, []);


  const [Device, setDevice] = useState(data);

  const FilterItems = (cate) => {
    const updatedItems = data.filter((elem) => {
      if (cate == "") {
        return elem.vendor;
      } else {
        return elem.vendor.toLowerCase() === cate;
      }
    });
    setDevice(updatedItems);
  };

  const [search, textSearch] = useState("");

  //   if (search.length > 0) {
  //     setData(
  //         data.filter(elem =>
  //             elem.model.toLowerCase().includes(search.toLowerCase())
  //         )
  //     )
  // } else {
  //     setData(data)
  // }

  useEffect(() => {
    const updatedItems = data.filter((elem) => {
      if (search == "") {
        return elem;
        // setData(data)
      } else if (search != "" && elem.model.toLowerCase().includes(search.toLowerCase())) {
        return elem;
      }
    });
    setDevice(updatedItems);
  }, [search]);

  function changeColor(event) {
    var prev = document.querySelector(".toggle_categories");
    prev.classList.remove("toggle_categories");

    var current = event.target;
    current.classList.add("toggle_categories");
  }

  return (
    <>
      <div>
        <Fade>
          <div className="w-full flex flex-col items-center justify-center text-center font-sans  text-5xl p-4 mt-4">
            <a className="font-bold ">Download DroidX-UI</a> <br></br>
            <span className="font-light text-lg p-4">
              Get latest build for you device in just few clicks.
            </span>
            <br></br>
            <h1 className="text-3xl font-bold p-4">Select your device</h1>
            <input
              type="text"
              onChange={(e) => textSearch(e.target.value)}
              onSubmit={(e) => textSearch(e.target.value)}
              className="mt-5 text-xl min-w-[300px] bg-secondary brightness-75 text-color p-4 rounded-full w-[50%] "
              placeholder="Find your device..."
            />
          </div>

          <div className="searchbar mt-5 flex  justify-center  items-center">
            <ul className="grid grid-cols-4 md:grid-cols-6 md:place-items-center gap-2 ">
              <button
                className=" search_button toggle_categories"
                onClick={(event) => {
                  FilterItems("");
                  changeColor(event);
                }}
              >
                All
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("realme");
                  changeColor(event);
                }}
              >
                Realme
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("xiaomi");
                  changeColor(event);
                }}
              >
                Xiaomi
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("samsung");
                  changeColor(event);
                }}
              >
                Samsung
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("oneplus");
                  changeColor(event);
                }}
              >
                Oneplus
              </button>
              {/* <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("poco");
                  changeColor(event);
                }}
              >
                Poco
              </button> */}
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("motorola");
                  changeColor(event);
                }}
              >
                Motorola
              </button>
            </ul>
          </div>
        </Fade>

        <div className="py-12 w-full flex flex-col items-center justify-center">
    {loading && <Loading />}
          
          {!Device.length && !loading && (
            <div className="font-sans w-full text-3xl font-bold text-center p-12 mt-12">
              Sorry, No device found.......
            </div>
          )}
          <div className="device_content grid grid-cols-1  gap-5 mt-5  md:grid-cols-2">
            {Device.map((dev) => {
              const {
                codename,
                vendor,
                model,
                maintainer_name,
                co_maintainer_name,
                BuildingTime,
                last_updated,
                version,
                active,
                device_clgl,
                Links,
                status,
                device_pic,
                GitProfile,
                position,
              } = dev;
              return (
                <Slide key={model} direction="up" triggerOnce={true}>
                  {model && <div className=" flex-basis-[50%] shadow-lg col-start-1  rounded-2xl max-w-[400px] min-w-[350px] w-[95%] min-h-[300px] bg-secondary p-4   ">

                    <div className="p-2 text-sm rounded-3xl backdrop-blur-lg font-sans absolute bg-white/60 text-secondary shadow-xl">
                      Latest
                    </div>
                    <div className=" upper  flex justify-center bg-secondary h-[200px]">
                      <img className="h-full py-2" src={device_pic} />
                    </div>
                    <div className=" py-2 relative h-full font-inter rounded-2xl align-baseline">
                      <div className="  w-[100%]   relative  px-4 text-left">
                        <div className=" italic wrap-break break-words tracking-loose">
                          {codename.toLowerCase()}
                          
                        </div>

                        <div className="break-words whitespace-nowrap w-full  font-bold text-2xl">
                          {model}
                        </div>
                        <div className="w-full grid grid-cols-2 gap-3">
                          <div className="flex flex-col">
                            <div className="text-[14px]  pt-5">Maintainer:</div>

                            <div className=" text-lg font-bold align-bottom ">
                              {maintainer_name}
                            </div>
                          </div>
                          <div className="flex flex-col ">
                            {co_maintainer_name && (
                            <div className="text-[14px]  pt-5">Co-Maintainer:</div>
                            )}
                            <div className="wrap-break text-lg font-bold align-bottom ">
                              {co_maintainer_name}
                            </div>
                          </div>
                        </div>
                        
                          <Link  href={{pathname: `download/${codename}`,
                          query: {
                            codename: codename,
                            vendor: vendor,
                            model: model,
                            maintainer_name: maintainer_name,
                            co_maintainer_name: co_maintainer_name,
                            BuildingTime: BuildingTime,
                            last_updated: last_updated,
                            version: version,
                            active: active,
                            device_clgl: device_clgl,
                            Gapps: Links[0].Gapps,
                            Vanilla: Links[0].Vanilla,
                            status: status,
                            device_pic: device_pic,
                            GitProfile: GitProfile,
                            position: position,
                          }
                          }
                          }>
                        <div className=" mt-12 rounded-full mr-[10px] build_button  text-xl p-3 cursor-pointer bg-primary text-center  hover:brightness-50">
                            
                            Get Build
                            </div>
                            </Link>
                          

                      </div>
                    </div>
                  </div>}
                </Slide>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
