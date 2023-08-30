import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Notify from "../Notify/Notify";
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <Search />
            <div className="right-topbar">
                <Profile /><Notify icon='https://cdn-icons-png.flaticon.com/512/5693/5693227.png' /><Notify icon='https://cdn-icons-png.flaticon.com/512/3718/3718330.png' />
            </div>
        </div>
    )
};

export default Topbar;