import React from "react";
import ComputerMouse from "./Itens/ComputerMouse/ComputerMouse";
import GameHeadphones from "./Itens/GameHeadphones/GameHeadphones";
import Gamepads from "./Itens/Gamepads/Gamepads";
import Keyboards from "./Itens/Keyboards/Keyboards";
import Computers from "./Itens/Computers/Computers";
import Games from "./Itens/Games/Games";
import { useState } from "react";
import './Category.css'

const Category = () => {
    const [show,setShow] = useState(<div>
    </div>)

    const [icon,setIcon] = useState('180deg')

    const [clicked,setClicked] = useState(false)

    const handleClick = (e) => {
        if (clicked === false) {
            setIcon('0deg')
            setClicked(true)
            setShow(<div>
                <ComputerMouse />
                <GameHeadphones />
                <Gamepads />
                <Keyboards />
                <Computers />
                <Games />
            </div>)
        } else {
            setIcon('180deg')
            setClicked(false)
            setShow(<div>
            </div>)
        }
    }

    return (
        <div className="category">
            <div className="category-item">
                <h3>Category</h3>
                <div className="category-show" onClick={handleClick}><svg style={{rotate: icon}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
    </svg></div>
            </div>
            {show}
        </div>
    )
};

export default Category;