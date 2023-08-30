import React from "react";
import './Notify.css';

const Notify = ({ icon }) => {
    return (
        <div><img className="notify" src={icon} alt="notify-icon" /></div>
    )
};

export default Notify;