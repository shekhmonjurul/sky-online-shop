import { VscThreeBars } from "react-icons/vsc";
import ProfilePic from "../assets/profile.jpg"
import React from "react";

export default function Header() {
    return (
        <div className="menubar">
            <img src="./logo.webp" alt="shope logo" srcset="" />
            <div><VscThreeBars /></div>
            <div className="rigth-manu">
                <img src={ProfilePic} alt="profile icon" />
            </div>
        </div>
    )
}