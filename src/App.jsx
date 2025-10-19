import React from 'react';
import { useState } from 'react';

const App = () => {

  const arr = [1, 2, 3, 4, 5, 6]
  return (
  
    <div>
          <input type="text" />
          <ul>
               {arr.map((item)=>(
                <li key={item}>{item}</li>
               ))}
          </ul>
    </div>
  )
}

export default App
