import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {

  const [food, setFood] = useState(foods)

  return (
    <div className="App">

         {/* <FoodBox food={{
                  name: "Orange",
                  calories: Number(85),
                  image: "https://i.imgur.com/abKGOcv.jpg",
                  servings: Number(1)
                }}/> */}

       <h2>Food List</h2>
        {foods.map(food => {
            return(
                <FoodBox food={food}/>
            );
        })}
    </div>
  );
}

export default App;
