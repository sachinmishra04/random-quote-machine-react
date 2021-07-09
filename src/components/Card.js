/*
 * Project:  random-quote-machine
 * File:      Card.js
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

class Card extends React.Component{

    state={
        author:this.props.firstQuote.author,
        quote:this.props.firstQuote.text
    };
    
    
    
    onCardClick=()=>{
       const quoteToShow= this.props.quote();
       this.setState({author:quoteToShow.author,quote:quoteToShow.text})
       console.log(this.state)
    }
 
    render(){  
        return (
            <div className="ui card-css cards">
                <div className="card">
                    <div className="content">
                        <div className="center aligned header">{this.state.author}</div>
                        <div className="center aligned description">
                            {this.state.quote}
                        </div>
                    </div>
                    <div onClick={this.onCardClick} className="ui bottom attached button">
                    <i className="add icon"></i>
                    New quote
                    </div>
                </div>
            </div>
    
    )
    }
}

export default Card;