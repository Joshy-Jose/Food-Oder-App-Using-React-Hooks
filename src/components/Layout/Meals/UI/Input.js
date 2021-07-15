import classes from '../UI/Input.module.css';


const Input = (props) => 
{        
    console.log(props.input.id) ;                       //The for attribute specifies which form element a label is bound to.

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    );
};

export default Input;