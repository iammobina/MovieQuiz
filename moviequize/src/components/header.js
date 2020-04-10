import React,{Component} from "react";
import '../css/style.css'


const getyear=()=>{
    const newdate=new Date();
    return newdate.getFullYear();
}

class Header extends Component {
    inputChangeHandler(event){
        console.log(event.target.value)
         console.log('Hey')
    }
    render(){
        return(
        <div className="top">
            <h1>Welcome to MovieQuiz</h1>
            <input type="text" onChange={this.inputChangeHandler}/>
            <h2>This site developed in {getyear()}</h2>
        </div>
    )
    }
}

export default Header;