import React from "react";
import './Display.css'

export default props =>
        <div className="display">               
                <label className="bola1"></label>
                <label className="bola2"></label>
                <label className="bola3"></label>
                <label className="valor">{props.value}</label>
        </div>


