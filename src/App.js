import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './Actions/Actions'
function App() {
  const counter = useSelector(state => state)
   const dispatch = useDispatch()
   const inc=()=> {dispatch(increment())}
   const dec = ()=> {dispatch(decrement())}
   
  return (

   <div className="container">
      <button className="btn"onClick={dec}>⫷</button>

   <div className="counter">
       <h1>Counter</h1>
       <h2 >{counter}</h2>
   </div>
   <button className="btn" onClick={inc} >⫸</button>
   </div>
  );
}

export default App;
