import React from "react";
import ReactDOM from "react-dom/client";
import logo from './contents/logo.png';
import { FaRegUser } from "react-icons/fa";


const SearchBar=({className})=>
    {
        return(
            <input type="text" placeholder="Search" className={className}></input>
        )
    }
    
const Header=()=>
{
    return(
        <div className="flex-container">
        <img src={logo} alt="header logo" width="50px" height="50px"/>
        <SearchBar className='searchbox'/>

        <FaRegUser style={{height:'40px',width:'40px'}}/>
        </div>
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);