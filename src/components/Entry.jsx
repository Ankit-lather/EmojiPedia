import React from "react";
import emojipedia from "../emojipedia";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.discription}</dd>
    </div>
  );
}

export default Entry;
