import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import SideBar from "react_remote/Sidebar";
import placeNavbar from "vue_remote/placeNavbar";

import "./index.scss";

const App = () => {
    const navbarRef = useRef(null)
    useEffect(() => {
       placeNavbar(navbarRef.current)
    }, []);

    return(
        <div className="flex h-screen mt-10 mx-auto max-w-6xl">
            <SideBar title="I am there" color="#00897b"/>
            <div className="w-full mx-3">
                <div ref={navbarRef}/>

                <div className="flex text-3xl h-full p-3 items-center justify-center">
                    <div className="text-center">
                        <div>MICRO-FRONTEND Host APP</div>
                        <small>Module federation is Awesome </small>
                        <br/>
                        <small>By William AMOUH ;)</small>
                    </div>
                </div>
            </div>
        </div>
    )
};
ReactDOM.render(<App/>, document.getElementById("app"));
