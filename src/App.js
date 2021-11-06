import React, {useState, AddRef} from 'react';

import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([{name:'Cook myself', id: 0, isComplete: false}])
  function addTodo(event) {
    
    const taskName= AddRef.current.value
    if (taskName){
     setTodos(oldTodos => {
       return[...oldTodos, {id:1, name: taskName, isComplete: false}]
     })
      AddRef.current.value= null
    } else {
      return null
    }
  }
  return (
    <>
      
      <TodoList todos={todos}/>
      <input ref={AddRef} type='text' />
      <button onClick={addTodo}>Add Item</button>
      <button>Clear All</button>
      <div>Left to do: 0</div>
    </>
  ); 
}

export default App;
