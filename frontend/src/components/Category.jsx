import React from "react";



const Category = (props) => {
    return (
        <div className="category-name">
            <div className={`circle ${props.color}`}></div>
            <div className="text">{props.text}</div>
        </div>
    )
}


export default Category