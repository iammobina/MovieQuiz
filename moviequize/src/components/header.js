import React from "react";

const getyear=() =>{
    const newdate=new Date();
    return newdate.getFullYear();
}

const Header=() =>{
    return(
        <div>
            <h1>Welcome to MovieQuize</h1>
            <h2>this site started in {getyear()}</h2>
        </div>
    )
}

export default Header;