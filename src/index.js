import React from "react";
import { render } from "react-dom";
//In old version we import ReactDOM and use ReactDOM.render()
import App from "./App"

//.root defined index.css will be used
import  "./index.css"
render(<App/>,document.getElementById('root'));
//document.getElementById('root'): This is the DOM element where you want to render the React component App