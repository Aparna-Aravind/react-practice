import React from "react";
import './ShopCategory.css';
function ShopCategory(props) {
    return (
        <div className="shop-category">
            <img src={props.banner} alt="" />
        </div>
    )
}

export default ShopCategory;