
import React from "react";
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
//give style to the component
import './header.css'
const Header = () => {
    return (
      /* id="home" helps us to navigate to the section using navbar home */
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content" >{/*header right*/}
            <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your email address"/>
                <button type="button">Get Started</button>
            </div>
            <div className="gpt3__header-content__people">
                <img src={people}/>
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
            {/*
              gpt3__header-content - class has flex-direction: column thats why image is not on right side
              move this to div gpt3__header class -where flex has default row direction.
              <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>*/}
        </div>
        <div className="gpt3__header-image">{/*header left*/}
                <img src={ai} alt="ai" />
        </div>
      </div>
    );
  };

export default Header;