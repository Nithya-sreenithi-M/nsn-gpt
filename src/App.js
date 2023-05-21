import React from "react";
//Checking react-icons 
//import { FaReact } from 'react-icons/fa';

//use case of components/index.js
import {Calltoaction,Brand,Navbar} from './components';
import {Footer, Blog,Possibility,Features, Whatgpt,Header} from './containers'

//all css from App.css will be applied to App.js components
import './App.css'

const App = () =>{
    return(
        
        <div className="App">        
        {/* <FaReact size={30} />*/}
            <div className="gradient__bg">
                <Navbar/>
                <Header/>

            </div>
            <div>
                <Brand/>
                <Whatgpt/>
                <Features/>
                <Possibility/>
                <Calltoaction/>
                <Blog/>
                <Footer/>            
            </div>
        </div>
        
        )
}

export default App;