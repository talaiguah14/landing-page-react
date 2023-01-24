import React from "react";
import "./style.css"

const Button = ({props }) =>{
return(
    <div>
   <button>
    {
        props.chidren
    }
   </button>
    </div>
)
};

export default Button