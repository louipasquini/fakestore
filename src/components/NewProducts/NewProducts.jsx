import React from "react";
import NewContainer from "./NewContainer/NewContainer";
import './NewProducts.css'

const NewProducts = () => {
    return (
        <div className="newproducts">
            <div className="header">
                <h2>New products</h2>
                <h5>Category</h5>
            </div>
            <div className="new-container">
                <NewContainer />
                <NewContainer />
            </div>
        </div>
    )
}

export default NewProducts;