import React from 'react'
import { useState } from 'react'

const App = () => {

  const [x, setX] = useState(false);

   const handleChange = (evt)=>{
      if (evt.target.value.length  >= 6) {
        setX(false);
      } else if(evt.target.value.length  > 0){
        setX(true);
      }else{
        setX(false);
      }
   }



  return (
    <div>
          <input type="text" onChange={handleChange} />
          {x && <span>kamida 6 ta belgidan iborat bo'sin</span>}
    </div>
  )
}

export default App
