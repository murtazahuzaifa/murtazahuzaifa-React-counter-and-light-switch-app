import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function Room() {
  let [Switch, setSwitch] = useState('ON');
  let [counter, setCounter] = useState(0);

  return (
    <div className={`Room ${Switch}`} >
      <button onClick={()=>setSwitch(Switch==='ON'? 'OFF':"ON")} >switch {Switch}</button>
      <br/>
      <div>
        <button onClick={()=>setCounter(++counter)} >+</button>
         {` ${counter} `}
        <button onClick={()=>setCounter(--counter)} >-</button>
      </div>
    </div>
  );
}

export default Room;
