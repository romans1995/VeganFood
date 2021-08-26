
import { useRef,useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = props => {
    const [amountIsValid , setamountIsValid] =  useState(true);
const amountInputRef =useRef();
const SubmitHandler= event => {
event.preventDefault();

const enterdAmount = amountInputRef.current.value;
const enterdAmountNumber = +enterdAmount;
if(enterdAmount.trim().length === 0 || enterdAmountNumber < 1 ||enterdAmountNumber > 5){
    setamountIsValid(false);
    return;

}
props.onAddToCart(enterdAmountNumber);
};



return (

    <div>
        <form className={classes.form} onSubmit = {SubmitHandler}>
            <Input ref = {amountInputRef}
            label = "Amount" input = {{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
        <button>+Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    </div>
);

}
export default MealItemForm;