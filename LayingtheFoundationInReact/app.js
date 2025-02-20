import React from "react";
import ReactDOM from "react-dom/client";

/*Purely using react*/
/*const heading=React.createElement("h1",{},"Hello from laying foundation in react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/



const heading=React.createElement("div",{className:'title'},[
    React.createElement("h1",{},"Main Heading"),
    React.createElement("h2",{},"Sub Heading"),
    React.createElement("h3",{},"Hello from laying foundation in react")
]);

/*using jsx*/

const headingUsingJSX=(
<div>
<h1>Main Heading</h1>
<h2>Sub heading </h2>
<h3>Hello from jsx syntax</h3>
    

</div>)

const attr=<span>Test from javascript attribute</span>

/* using functional component*/

const HeadingFn=()=>{
    return(
        <div>
            
            <h1>Main heading</h1>
            <h2>Sub Main heading</h2>
            <h3>Sub Heading</h3>
            <p>Hello from functional component</p>
            {attr}
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingFn/>);