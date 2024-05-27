import React from 'react'
import Groceries from '../components/Groceries.js';
import fruits from '../fruits.js';
import Dairy from '../components/Dairy.js';
import Bevarages from '../components/Bevarages.js';
import Cleaninghousehold from '../components/Cleaninghousehold.js';
import '../components/Component.css';
import { Dropdown } from 'primereact/dropdown';
import {BrowserRouter as Router,Link} from 'react-router-dom';
const Home = () => {
  const dailyneeds = [
    {name: 'Groceries', code: 'gr'},
    {name: 'Fruits&veggies', code:'fv'},
    {name: 'Bevarages', code: 'bv'},
    {name: 'Cleaninghousehold', code: 'cg'},
    {name: 'Dairy', code: 'dr'}
  ];
  return (
    <div className="bgr">
       <div>
        <h1>Welcome to Supermart</h1>
       </div>
       <div>
         <Dropdown options={dailyneeds} optionLabel="name" placeholder="Select a Name" className="w-full md:w-14rem"/>
       </div>
     </div>
  )
}

export default Home;