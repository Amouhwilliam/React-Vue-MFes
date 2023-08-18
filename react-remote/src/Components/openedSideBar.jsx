import React from 'react';
import {ArrowLeft} from "react-feather";

function OpenedSideBar({setOpened, color, title}) {
    return (
        <div className={`w-[500px] h-full p-4 sticky top-0 rounded-lg transform ease-in-out transition-all duration-400`}
             style={{backgroundColor: color || 'transparent', color: "white"}}
        >
            <div className={`w-full text-[30px] flex font-bold mb-10 cursor-pointer`}>
                <div className="uppercase">
                    {title}
                </div>
                <div className="flex w-full justify-end items-center"
                     onClick={()=>{
                         setOpened(false)
                     }}
                >
                    <ArrowLeft/>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="cursor-pointer">
                    Menu 1
                </div>
                <div className="cursor-pointer">
                    Menu 2
                </div>
                <div className="cursor-pointer">
                    Menu 3
                </div>
            </div>
        </div>
    );
}

export default OpenedSideBar;