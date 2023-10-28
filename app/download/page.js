"use client"

import Devices from "@/DeviceFiles/alldevices"
import { useState } from "react"

export default function Download(){



    const [Device , setDevice] = useState(Devices)



    const FilterItems = (cate) => {
    const updatedItems = Devices.filter((elem) => {
        if(cate == ""){
            return elem.category
        }
        else{
        return elem.category === cate;
    }
    })
    
    // var current = document.querySelector(".search_button").classList.add("clicked")

    setDevice(updatedItems)
}
function changeColor(event){
    var prev = document.querySelector(".clicked");
    console.log(prev)
    prev.classList.remove("clicked");

    var current = event.target;
    current.classList.add("clicked");

}


    return(
        <>
            <div>
                <div className="w-full flex flex-col items-center justify-center font-sans  text-5xl p-4 mt-4">
                    <span className="font-bold">Download DroidX-UI</span> <br></br>
                    <span className="font-light text-lg p-4">Get latest build for you device in just few clicks.</span><br></br>

                    <h1 className="text-3xl font-bold p-4">Select your device</h1>
                    

                        <input type="text" className="mt-5 text-xl bg-secondary brightness-75 text-color p-4 rounded-full w-[50%] " placeholder="Find your device..." />

                </div>

            <div className='searchbar mt-5 flex justify-center  items-center'>
                <ul className='filter_bar grid grid-cols-4 md:grid-cols-7 place-items-center gap-2 '>
                    <button className=" search_button clicked" onClick={(event) => {FilterItems('');changeColor(event)}}>All</button>
                    <button className="search_button" onClick={(event) => {FilterItems('Realme');changeColor(event)}}>Realme</button>
                    <button className="search_button" onClick={(event) => {FilterItems('Redmi');changeColor(event)}}>Redmi</button>
                    <button className="search_button" onClick={(event) => {FilterItems('Samsung');changeColor(event)}}>Samsung</button>
                    <button className="search_button" onClick={(event) => {FilterItems('Oneplus');changeColor(event)}}>Oneplus</button>
                    <button className="search_button" onClick={(event) => {FilterItems('Poco');changeColor(event)}}>Poco</button>
                    <button className="search_button" onClick={(event) => {FilterItems('Motorola');changeColor(event)}}>Motorola</button>


                    
                </ul>

        </div>
        <div className="w-[100%] flex flex-col items-center justify-center">

        <pre className='device_content grid grid-cols-1 gap-5 mt-5 md:grid-cols-2'>

                {Device.map((dev) => {
                    const {id, name, codename, category, maintainer} = dev 
                    return(
                
                        <div className="shadow-lg rounded-2xl w-[400px] h-[300px] bg-secondary p-4 " key={id}>
                            <div className="p-2 text-sm rounded-xl font-sans absolute bg-white text-primary">Latest</div>
                        {/* <div className="upper bg-primary h-[200px]"></div> */}
                        <div className="relative h-full font-inter rounded-3xl ">
                                <div className='  w-[100%]  p-5  text-bottom mb-0 bottom-0 relative top-[60%]'>
                                    <div className=" italic font-semibold">{codename}</div>
            
                                    <div className="break-words whitespace-nowrap w-full  font-bold text-3xl">{name}</div>

                                    {/* <div className="  pt-5 px-3">Maintainer:</div>
            
                                    <div className=" text-2xl font-bold p-3">{maintainer}</div> */}
                                {/* <div className="mr-[10px] build_button text-black text-xl p-3 cursor-pointer  hover:bg-gray-600 hover:text-white" href={"https://sourceforge.net/projects/droidxui-releases/files/" + codename}>Get Build</div> */}
                                </div>
                
                        </div>
                        
                    </div>
          
                    )
                })}

        </pre>
        </div>
    </div>
        </>
    )
}