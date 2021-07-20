import React from 'react';
import classes from '../UI/Input.module.css';


const Input = React.forwardRef((props, ref) => 
{        
    console.log(props.input.id) ;                       //The for attribute specifies which form element a label is bound to.

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref}{...props.input}/>
        </div>
    );
});

export default Input;