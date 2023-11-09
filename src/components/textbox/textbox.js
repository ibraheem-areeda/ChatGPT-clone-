import { useState } from "react";
import "./textbox.css";
export default function TextBox (props){


return(
    <>
    <div className="textbox-container">
    <input className="chat-input" type="text" value={props.questionText} onChange={(event) => {props.textinput(event.target.value);}}></input>
    <button onClick={props.handleSend}>Send</button>
    </div>
    </>
)}

