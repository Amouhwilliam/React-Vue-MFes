import React from 'react';
import {ArrowLeft, ArrowRight} from "react-feather";

function ClosedSideBar({setOpened, color, title}) {
    return (
        <div className="w-[200px] h-full p-4 rounded-lg"
             style={{backgroundColor: color || 'transparent', color: "white"}}
        >
            <div className="w-full text-[30px] flex font-bold mb-10 cursor-pointer">
                <div className="uppercase">
                    {title[0]}
                </div>
                <div className="flex w-full items-center justify-end"
                     onClick={()=>{
                         setOpened(true)
                     }}
                >
                    <ArrowRight/>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="cursor-pointer">
                    M-1
                </div>
                <div className="cursor-pointer">
                    M-2
                </div>
                <div className="cursor-pointer">
                    M-3
                </div>
            </div>
        </div>
    );
}

export default ClosedSideBar;