import React from "react";
import Containers from "./Conteiners/Containers";
import "./Games.css"

const Games = () => {
    return (
        <div className="games-container">
            <div className="games-menu">
                <div className="games-filter">
                    <h2>Our Products</h2>
                    <button>Top</button>
                    <button>Popular</button>
                    <button>Most sold</button>
                </div>
                <h5>Categories</h5>
            </div>
            <div className="line-one">
                <Containers />
                <Containers />
                <Containers />
                <Containers />
                <Containers />
            </div>
            <div className="line-two">
                <Containers />
                <Containers />
                <Containers />
                <Containers />
                <Containers />
            </div>
        </div>
    )
}

export default Games;