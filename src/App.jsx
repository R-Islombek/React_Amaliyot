import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const [isError, setIsError] = useState(false);
  const handleInputChange = (e) => {
    const value = e.target.value;
    
    setInputValue(value); 

    if (value.length < 6) {
      setIsError(true); 
    } else {
      setIsError(false);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleInputChange} 
      />
      {isError && <span>kamida 6 belgidan iborat bo'lishi kerak</span>}
    </div>
  );
}

export default App;