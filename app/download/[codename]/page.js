import React from "react";

export default function Page({ searchParams }) {



  return (
    <>
      <div className=" w-full p-12 place-items-center grid md:grid-cols-2 grid-cols-1">
        <div className="w-[50%]  device_pix">
                <img src={searchParams.device_pic}></img>
        </div>
        <div className=" flex flex-col">
                <div className="py-6 ">
                    <h1 className="font-sans font-semibold text-2xl md:text-5xl">{searchParams.model}</h1>
                    <h3 className="italic text-md md:text-lg">{searchParams.codename}</h3>
                    <div className="w-full grid grid-cols-2 py-6 gap-6 ">

                            <div className="p-2  ">
                            <h5 className="text-[14px] md:text-md">Last Updated:</h5>
                            <h3 className="font-semibold text-md md:text-xl">{searchParams.last_updated}</h3>
                            </div>
                            <div className="p-2 ">
                            <h5 className="text-[14px] md:text-md">active:</h5>
                            <h3 className="font-semibold text-md md:text-xl">{searchParams.active}</h3>
                            </div>
                            
        
                            <div className="p-2 ">
                            <h5 className="text-[14px] md:text-md">Version:</h5>
                            <h3 className="font-semibold text-md md:text-xl">{searchParams.version}</h3>
                            </div>
                            <div className="p-2 ">
                            <h5 className="text-[14px] md:text-md">status:</h5>
                            <h3 className="font-semibold text-md md:text-xl">{searchParams.status}</h3>
                            </div>

                            <div className="p-2 ">
                            <h5 className="text-[14px] md:text-md">Maintainer:</h5>
                            <h3 className="font-semibold text-md md:text-xl">{searchParams.maintainer_name}</h3>
                            </div>
                            
                           {searchParams.co_maintainer_name &&  <div className="p-2 ">

                            <h5 className="text-[14px] md:text-md">Co-Maintainer:</h5>
                            <h3 className="font-semibold text-md md:text-xl">{searchParams.co_maintainer_name}</h3>
                           
                         </div>}
                           
                        
                    </div>
                    <div className="  py-6 grid grid-cols-2">
                            <div>
                            <button  className={`bg-primary text-white text-lg p-4 rounded-full ${searchParams.Gapps == "" ? "brightness-50" : "brightness-100"}`} >
                                    <a href={searchParams.Gapps}>Gapps</a>

                                    </button>
                            </div>  
                            <div>
                                <button  className={`bg-primary text-white text-lg p-4 rounded-full ${searchParams.Vanilla == "" ? "brightness-50" : "brightness-100"}`} >
                                    <a href={searchParams.Vanilla}>Vanilla</a>

                                    </button>
                            </div>  
                        </div>
                </div>
        </div>
      </div>
    </>
  );
}
