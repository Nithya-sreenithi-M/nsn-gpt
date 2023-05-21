
import React from "react";

//give style to the component
import './header.css'
const Header = () => {
    return (
      /* id="home" helps us to navigate to the section using navbar home */
      <div className="gpt3_header section__padding" id="home">
        <div className="gpt3__header-content">
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
        </div>
      </div>
    );
  };

export default Header;