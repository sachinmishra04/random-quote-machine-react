/*
 * Project:  random-quote-machine
 * File:      CardCopy.js
 * Author:   Amit Mishra (amit.mishra+CODA@gmail.com)
 * 
 * Description:
 * 
 * Revision History:
 *   2021-January-22: 
 * 
 * Copyright (c) 2021 Self
 * 
 * License:
 *    
 */

/*
 * Project:  random-quote-machine
 * File:      Card2.js
 * Author:   Amit Mishra (amit.mishra+CODA@gmail.com)
 * 
 * Description:
 * 
 * Revision History:
 *   2021-January-21: 
 * 
 * Copyright (c) 2021 Self
 * 
 * License:
 *    
 */

import React from "react";
import "./Card.css";
import Twitter from "./Twitter";

const CardCopy=(props)=>{

    function giveValidAuthor(){
        return (props.author===null)?"Unknown":props.author;
    }
    

    function onCardClick(){
       props.quote();
       
    }

    return(
        <div>
        <div id="quote-box" className="ui card-css cards">
        <div className=" ui raised card">
            <div className="content">
                <div id="text" style={{color:props.color}} className={`center aligned ${props.color} header`}>{giveValidAuthor()}</div>
                <div id="author" style={{color:props.color}} className={`${props.color} center aligned big description`}>
                    {props.text}
                </div>
            </div>

            <div class="extra content">
                <div class="ui two buttons">
                    <div id="tweet-quote" class="ui basic green button">
                        <Twitter author={giveValidAuthor()} text={props.text}/>
                    </div>
                    <div id="new-quote" onClick={onCardClick} 
                      className={`${props.color} ui inverted button` }> 
                      Next Quote</div>
                    
                </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default CardCopy;