
import React from "react";

//give style to the component
import './whatgpt.css'
import Features from '../features/Features'
const Whatgpt  = () =>{
    return(
        <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
            <div className="gpt3__whatgpt3-feature">
                {/*what is GPT-3, chatbots, knowledgebase and education has same kind of feature.
                    Lets define them under feature component and reuse them.
            */}
            <Features/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient-text">
                The possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Features/>
                <Features/>
                <Features/>
            </div>
        </div>
    )
}

export default Whatgpt;