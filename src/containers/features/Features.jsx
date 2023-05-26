
import React from "react";

//give style to the component
import './features.css'
import Feature from '../../components/feature/Feature'
const featuresData =[
    {
        title: 'Improving end distrusts instantly ',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
    }   

]

const Features = () =>{
    return(
        
        <div className="gpt3__features section__padding" id="#features">
            <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {/* Instead of <Feature title ={} text ../> <Feature title ={} text ../> four times 
            we can create the array and loop througth the title and text and add them in <Feature/>  */}
                {featuresData.map((item, index)=>(
                    <Feature title={item.title} text={item.text} key={item.title+index}/>
                ))}
            {/*In React, the key attribute is used to uniquely identify components within a collection of elements. It helps React efficiently update and re-render components when their order or structure changes.

Although you might not be directly accessing the key prop within the Feature component, it serves an important purpose for React's internal rendering and reconciliation process. React uses the key prop to keep track of each component's identity and optimize the rendering performance.

When rendering a list of components, such as in a loop, it's crucial to assign a unique key to each item. This allows React to determine which items have been added, removed, or re-ordered when the list changes. Without a key, React may have to re-render the entire list instead of efficiently updating only the necessary components, leading to potential performance issues.

In summary, even if you're not directly using the key prop within the Feature component, it is essential to provide a unique key value to each rendered Feature instance to ensure optimal performance and correct behavior when the list of items changes. */}
            </div>
        </div>
    )
}
export default Features;