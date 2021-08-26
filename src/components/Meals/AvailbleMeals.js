
import Card from '../UI/Card';
import classes from './AvilableMeals.module.css';
import MealItem from './MealItem';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: ' Vegan Sushi',
      description: 'Finest tofu and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Vegan Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Vegan Burger',
      description: 'American, raw, beyond meat',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const AvilableMeals = () =>{
    const mealsList = DUMMY_MEALS.map(meal =><MealItem id={meal.id} 
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}/>);
    return ( 
    
    <section className = {classes.meals} >
        <Card >
          <ul> {mealsList}</ul>
         </Card>
            
        
    </section>);
   
    
};

export default AvilableMeals;