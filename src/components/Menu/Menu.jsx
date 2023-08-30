import React from "react";
import Topbar from "../Topbar/Topbar";
import Banner from "../Banner/Banner";
import Games from "../Games/Games";
import NewProducts from "../NewProducts/NewProducts";
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <Topbar />
            <Banner />
            <Games />
            <NewProducts />
        </div>
    )
}

export default Menu;