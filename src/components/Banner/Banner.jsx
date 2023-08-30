import React from "react";
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-center">
            <div className="banner">
                <div className="info">
                    <h5>New</h5>
                    <h1>Headphones</h1>
                </div>
                <img className="image" src="https://cutewallpaper.org/24/headset-png/gaming-headset-png-hd-image-png-all.png" alt="image" />
                <h1>R$499,00</h1>
            </div>
        </div>
    )
}

export default Banner;