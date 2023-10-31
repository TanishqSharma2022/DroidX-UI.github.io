"use client";

import Devices from "@/DeviceFiles/alldevices";
import { useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function Download() {
  const [Device, setDevice] = useState(Devices);

  const FilterItems = (cate) => {
    const updatedItems = Devices.filter((elem) => {
      if (cate == "") {
        return elem.category;
      } else {
        return elem.category === cate;
      }
    });
    setDevice(updatedItems);
  };

  const [search, textSearch] = useState("");

  useEffect(() => {
    const updatedItems = Devices.filter((elem) => {
      if (search == "") {
        return elem;
      } else if (elem.name.toLowerCase().includes(search.toLowerCase())) {
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
            <ul className="filter_bar grid grid-cols-4 md:grid-cols-7 md:place-items-center gap-2 ">
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
                  FilterItems("Realme");
                  changeColor(event);
                }}
              >
                Realme
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("Redmi");
                  changeColor(event);
                }}
              >
                Redmi
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("Samsung");
                  changeColor(event);
                }}
              >
                Samsung
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("Oneplus");
                  changeColor(event);
                }}
              >
                Oneplus
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("Poco");
                  changeColor(event);
                }}
              >
                Poco
              </button>
              <button
                className="search_button"
                onClick={(event) => {
                  FilterItems("Motorola");
                  changeColor(event);
                }}
              >
                Motorola
              </button>
            </ul>
          </div>
        </Fade>

        <div className="w-full flex flex-col items-center justify-center">
        {!Device.length && (
              <div className="font-sans  w-full text-3xl font-bold text-center p-12 mt-12">
                Sorry, No device found.......
              </div>
            )}
          <pre className="device_content grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 place-items-center">
           
            {Device.map((dev) => {
              const { id, name, codename, category, maintainer } = dev;
              return (
                <Slide direction="up" triggerOnce={true}>
                  <div
                    className="shadow-lg rounded-2xl max-w-[400px] min-w-[350px] w-[95%] min-h-[300px] bg-secondary p-4  "
                    key={id}
                  >
                    <div className="p-2 text-sm rounded-xl font-sans absolute bg-white text-primary">
                      Latest
                    </div>
                    <div className="upper bg-primary h-[200px]"></div>
                    <div className="relative h-full font-inter rounded-3xl align-baseline">
                      <div className="  w-[100%]   relative ">
                        <div className=" italic wrap-break font-semibold">{codename}</div>

                        <div className="break-words whitespace-nowrap w-full  font-bold text-3xl">
                          {name}
                        </div>

                        <div className="  pt-5">Maintainer:</div>

                        <div className=" text-2xl font-bold align-bottom ">
                          {maintainer}
                        </div>
                        {/* <div className="mr-[10px] build_button text-black text-xl p-3 cursor-pointer  hover:bg-gray-600 hover:text-white" href={"https://sourceforge.net/projects/droidxui-releases/files/" + codename}>Get Build</div> */}
                      </div>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </pre>
        </div>
      </div>
    </>
  );
}
