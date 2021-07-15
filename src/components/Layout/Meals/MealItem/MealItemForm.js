import React from "react";
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
                                                      // {} => evaluvation, {{}} => object
                                                      //The step attribute can be used together with the max and min attributes to create a range of legal values.
const MealItemForm = (props) =>
{
  
return (
    <form className={classes.form}>
    <Input label="Amount" input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+ Add</button>
</form>
);

}
export default  MealItemForm;