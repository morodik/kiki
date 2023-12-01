import NewCosts from './components/NewCost/NewCost';
import Costs from "./components/Costs/Costs";
import React, { useState } from 'react';
//стрелочная функция

const initial_costs = [
  {
    id: 'c1',
    date: new Date(2021, 9, 12),
    name: 'Холодильник',
    amount: 979,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    name: 'MacBook',
    amount: 2000,
    },
  {
    id: 'c3',
    date: new Date(2021, 12, 12),
    name: 'AirPods 3',
    amount: 150
    }
];

const App = () => {
  
    const [costs, setCosts] = useState(initial_costs);
   // return React.createElement('div',{}, 
   // React.createElement('h1', {}, " hi react"),
   // React.createElement(Costs, {costs: costs},)); //код под капотом
  
  const addCostHandler = (cost) => {
      setCosts(prevCosts => {
       return [cost, ...prevCosts]
      });
    };
   return (
    <div>
      <NewCosts onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
};

export default App;
