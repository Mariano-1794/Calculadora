import React from "react";
import './Display.css'

export default props =>
        <div className="display">
                <div className="bola">
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <label className="valor">{props.value}</label>
        </div>


