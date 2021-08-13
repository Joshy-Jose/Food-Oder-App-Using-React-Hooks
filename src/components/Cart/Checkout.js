import classes from './Checkout.module.css';
import {useRef, useState} from 'react';



const isEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim().length!== 5;

const Checkout = (props) => {

    const [formInputsValidity, setformInputsValidity] = useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    });

   const nameInputRef = useRef();
   const streetInputRef = useRef();
   const postalCodeInputRef = useRef();
   const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostCode = postalCodeInputRef.current.value;
    const enteredCity = nameInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostCodeIsValid = !isFiveChar(enteredPostCode);

    setformInputsValidity({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        city:enteredCityIsValid,
        postalCode:enteredPostCodeIsValid
    });


    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostCodeIsValid;

    if(!formIsValid) {
        return;
    }

    props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        city:enteredCity,
        postalCode:enteredPostCode
    });

  };
// adding extra invalid classes if the field is invalid

const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '': classes.invalid
}`;
const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '': classes.invalid
}`;
const postalcodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '': classes.invalid
}`;
const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '': classes.invalid
}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalcodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal'ref={postalCodeInputRef}  />
        {!formInputsValidity.postalCode && <p>Please enter a valid post code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city name</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;