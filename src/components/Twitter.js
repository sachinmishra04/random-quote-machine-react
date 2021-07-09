/*
 * Project:  random-quote-machine
 * File:      Twitter.js
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
import logo from "./Twitter_Social_Icon_Circle_Color.png"

const Twitter=(props)=>{
    return(
        <div>
        <a class="twitter-share-button "
            href={`https://twitter.com/intent/tweet?text=${props.text}-${props.author}`}
            data-size="small"
            data-text={props.text}
            data-url="https://dev.twitter.com/web/tweet-button"
            data-hashtags="example,demo"
            data-via="twitterdev"
            data-related="twitterapi,twitter">
            <img src={logo} style={{width:`24px`,height:`24px`}}/>
        </a>
        </div>
    )
}

export default Twitter;