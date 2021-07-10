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
import logo from "./Twitter_Social_Icon_Circle_Color.png";

const Card2 = (props) => {
  function giveValidAuthor() {
    return props.author === null ? "Unknown" : props.author;
  }

  function onCardClick() {
    props.quote();
  }

  return (
    <div className="box">
      <div id="quote-box" className="ui card-css cards">
        <div className=" ui raised card">
          <div className="content">
            <p
              id="text"
              style={{ color: props.color }}
              className={`${props.color} center aligned big description`}
            >
              "{props.text}"
            </p>
            <div
              id="author"
              style={{ color: props.color }}
              className={`center aligned ${props.color} header`}
            >{`-${giveValidAuthor()}`}</div>
          </div>

          <div class="ui two buttons">
            <div>
              {" "}
              <a
                href={`https://twitter.com/intent/tweet?text=${props.text}-${props.author}`}
                id="tweet-quote"
                class="ui basic green button"
              >
                <img src={logo} />
              </a>
            </div>
            <button
              id="new-quote"
              onClick={onCardClick}
              className={`${props.color} ui inverted button`}
              style={{ backgroundColor: props.color }}
            >
              Next Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
