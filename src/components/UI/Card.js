import classes from '../UI/Card.module.css';
// import MealItem from '../Meals/MealItem';
const Card = (props) => {

    return(

        <ul className ={classes.card} >
            {props.children}
        </ul>
    );

}

export default Card;