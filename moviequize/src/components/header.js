import React,{Component} from "react";

const getyear=()=>{
    const newdate=new Date();
    return newdate.getFullYear();
}

class Header extends Component {
    render(){
        return(
        <div>
            <h1>Welcome to MovieQuize</h1>
            <h2>This site developed in {getyear()}</h2>
        </div>
    )
    }
}

export default Header;