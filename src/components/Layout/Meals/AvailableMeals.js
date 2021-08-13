import { useEffect, useState } from 'react';
import clasess from './AvailableMeals.module.css';
import Card from '../Meals/UI/Card';
import MealItem from './MealItem/MealItem';


  const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

  useEffect(() => {

    const fetchMeals = async () => {
    const response = await fetch('https://react-http-hooks-88948-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    const resposeData = await response.json();
   
   
   if(!response.ok)
   {
     throw new Error('Something went wrong!');
   }
   
   
    const loadedMeals = [];

    for(const key in resposeData) {
      loadedMeals.push({
        id:key,
        name:resposeData[key].name,
        description:resposeData[key].description,
        price:resposeData[key].price

      })
    }
    setMeals(loadedMeals);
    setIsLoading(false);
    };


      fetchMeals().catch (error =>  {              //will get an error object here.it have a default error property,we get access an set message             
      setIsLoading(false);
      setHttpError(error.message);
    });
     },[]);

  if(isLoading)
  {
    return(<section className={clasess.MealsLoading}>Loading....</section>)
  }

  if(httpError) {
    return (
      <section className={clasess.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

    const mealList = meals.map((meal) => <MealItem 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}/>);
      
    return (
      <section className={clasess.meals}>
        <Card>
        <ul>{mealList}</ul>
        </Card>
        
      </section> );
  };

  export default AvailableMeals;
  