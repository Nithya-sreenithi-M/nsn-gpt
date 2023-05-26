
import React, {useState}from "react";

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from "../../assets/logo.svg"
//give style to the component
import './navbar.css'

{/*since we need same menu for desktop and mobile view */}

const Menu = ()=>{
    return(
        <div>
        <p><a href="#home">Home</a></p>
                    <p><a href="#home">What is GPT</a></p>
                    <p><a href="#home">Open AI</a></p>
                    <p><a href="#home">Case studies</a></p>
        <p><a href="#home">Library</a></p>
        </div>
    )
}


const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    {/* are we currently showing the mobile menu or not*/}
    {/*[block]__[element]--[modifier] - BEM naming convension */}
    return(
        
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                {/*https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fadrianhajdin%2Fproject_modern_ui_ux_gpt3%2Ftree%2Fmain%2Fsrc%2Fassets

                logo is downloaded from asserts. Create a assets folder inside src
            */}
                    <img src = {logo} alt="logo"/>
                </div>
                {/*Menu for desktop view menu */}
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#whgpt3">What is GPT</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#home">Case studies</a></p>
                    <p><a href="#home">Library</a></p>
                </div> 
                
            </div>
                <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type = "button">Sign up</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {/*mobile view - useState */}
                   {
                    toggleMenu ?<RiCloseLine color="#fff" size={37} onClick={()=>setToggleMenu(false)} />:<RiMenu3Line color="#fff" size={37} onClick={()=>setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu/>
                                <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type = "button">Sign up</button>
                            </div>
                            </div>
                        
                        </div>
                    )
                }
                </div>
         </div>)
}

export default Navbar;