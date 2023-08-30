import React from "react";
import './Containers.css';

const Containers = () => {
    return (
        <div className="container">
            <img src="https://veartech.com.br/wp-content/uploads/2023/07/15203910317_15203788160_15198181998_15162090012_15145137642_15145137259_15145137129_15143770315_15143766183_.png" alt="quest" />
            <h2>Quest 2</h2>
            <h4>VR Glasses</h4>
            <h2 className="price">$600,00</h2>
            <div className="action">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg><h5>Add to cart</h5>
            </div>
        </div>
    )
}

export default Containers;