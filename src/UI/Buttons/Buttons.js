import React from 'react';
import './Button.css'

const ButtonHolder =(props)=>{

    return(

        <button onClick ={props.action} className={props.type}> {props.children} </button>
       
    )
}

export default  ButtonHolder;