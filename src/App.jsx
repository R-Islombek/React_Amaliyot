import React, { useState } from 'react';

const SoddaroqTodo = () => {
  const [todos, setTodos] = useState([]);
  
  const [input, setInput] = useState('');


  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };


  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Soddaroq Todo Ilovasi</h1>
      
      {/* Input va Qo'shish tugmasi */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Yangi ish..."
      />
      <button onClick={addTodo}>Qo'shish</button>


      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
      
            <button onClick={() => deleteTodo(todo.id)}>O'chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoddaroqTodo;