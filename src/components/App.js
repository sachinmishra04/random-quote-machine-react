/*
 * Project:  random-quote-machine
 * File:      App.js
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
import axios from "axios";
//import Card from "./Card";
import Card2 from "./Card2";
//import Confett from "./Confetti.js"

class App extends React.Component{

    state={quotes:[],author:"",text:""};

    
    
    
    componentDidMount=()=>{
        console.log("app is mounting");
        const options = {
            method: 'GET',
            url: 'https://type.fit/api/quotes'
            
           
          };
          
          axios.request(options).then((response)=> {
              
              this.setState({
                  quotes:response.data,
                  author:response.data[0].author,
                  text:response.data[0].text
            });
              console.log(this.state.quotes,"quotes are now available");
          }).catch(function (error) {
              console.error(error);
          });
          
          
    }

    randomColor=()=>{
        const colors=['red','orange','olive','green','teal',
        'blue','#6C63FF'];           
        
        const index=Math.floor(colors.length*Math.random());

        return colors[index];
    }

    onNewQuote=()=>{
        const randomIndex=Math.floor(Math.random()*this.state.quotes.length);
        this.setState({
            author:this.state.quotes[randomIndex].author,
            text:this.state.quotes[randomIndex].text
         }
        )
        
    }
    
    render(){
        return(
            <div className="app" >
                <Card2 
                    quote={this.onNewQuote} 
                    author={this.state.author}
                    text={this.state.text}
                    color={this.randomColor()}/>
                
            </div>
        )
    }
}

export default App;