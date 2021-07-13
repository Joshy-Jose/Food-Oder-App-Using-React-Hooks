import classes from './MealItem.module.css';

const MealItem = (props) =>
{
    
    const price = `$${props.price.toFixed(2)}`;
    
    
    
    
    
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}><h3>{props.description}</h3></div>
            <div className={classes.price}><h3>{price}</h3></div>
        </div> 
        <div>

        </div>   
    </li>
}

export default MealItem;