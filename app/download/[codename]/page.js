import React from "react";

export default function Page({ searchParams }) {



  return (
    <>
      <div className=" w-full p-12 place-items-center grid md:grid-cols-2 grid-cols-1">
        <div className="w-[50%]  device_pix">
                <img src={searchParams.device_pic}></img>
        </div>
        <div className=" flex flex-col">
                <div className="py-6">
                    <h1 className="font-bold text-2xl md:text-5xl">{searchParams.model}</h1>
                    <h3 className="italic text-lg md:text-xl">{searchParams.codename}</h3>
                    <div className="w-full grid grid-cols-2 py-6">
                        <div className=" flex flex-col">
                            <div className="p-2  ">
                            <h5 className="md:text-lg">Last Updated</h5>
                            <h3 className="font-bold text-xl">{searchParams.last_updated}</h3>
                            </div>
                            <div className="p-2 ">
                            <h5 className="md:text-lg">active</h5>
                            <h3 className="font-bold text-xl">{searchParams.active}</h3>
                            </div>
                            <div className="p-2 ">
                            <h5 className="md:text-lg">Maintainer</h5>
                            <h3 className="font-bold text-xl">{searchParams.maintainer_name}</h3>
                            </div>
                            
                        </div>
                        <div className="">
                            <div className="p-2 ">
                            <h5 className="md:text-lg">Version</h5>
                            <h3 className="font-bold text-xl">{searchParams.version}</h3>
                            </div>
                            <div className="p-2 ">
                            <h5 className="md:text-lg">status</h5>
                            <h3 className="font-bold text-xl">{searchParams.status}</h3>
                            </div>
                           {searchParams.co_maintainer_name &&  <div className="p-2 ">

                            <h5 className="md:text-lg">Co-Maintainer</h5>
                            <h3 className="font-bold text-xl">{searchParams.co_maintainer_name}</h3>
                           
                         </div>}
                           
                        </div>
                        
                    </div>
                    <div className="  py-6 grid grid-cols-2">
                            <div>
                            <button  className="bg-primary text-white text-xl p-4 rounded-full">
                                    <a href={searchParams.Gapps}>Gapps</a>

                                    </button>
                            </div>  
                            <div>
                                <button  className="bg-primary text-white text-xl p-4 rounded-full">
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
