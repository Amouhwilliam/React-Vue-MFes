import React, {useState} from "react";
import "../index.scss";
import OpenedSideBar from "./openedSideBar";
import ClosedSideBar from "./closedSideBar";

const Sidebar = ({title, color}) => {
    const [opened, setOpened] = useState(true)
    return (
        <>
            {
            opened ? <OpenedSideBar opened={opened} setOpened={setOpened} color={color} title={title}/> :
                <ClosedSideBar opened={opened} setOpened={setOpened} color={color} title={title}/>
            }
        </>
    )
}

export default Sidebar;

{/*
        <div className="w-full h-32 bg-gray-400 rounded-lg flex justify-center items-center">
            <div>{title || "--"}</div>
        </div>
        */
}