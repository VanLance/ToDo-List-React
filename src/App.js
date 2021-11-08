import React, {useState, useRef} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  const addRef= useRef()
    
  function checkBox(id){
    const newStuff= [...todos]
    const todo = newStuff.find(specificItem => specificItem.id ===id)
    todo.isComplete = !todo.isComplete
    setTodos(newStuff)
  }
  
  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.isComplete)
    setTodos(newTodos)
  }
  
  const addTodo = (event) => {
    
    const taskName= addRef.current.value
    if (taskName){
     setTodos(oldTodos => {
       return[...oldTodos, {id: uuidv4(), name: taskName, isComplete: false}]
     })
      addRef.current.value= null
    } else {
      return null
    }
  }
  return (
    <>
      <div className="flex-column margin-top"></div>
      <TodoList todos={todos} checkBox={checkBox}/>
        <input ref={addRef} type='text' />
        <button onClick={addTodo}>Add Item</button>
        <button onClick={clearTodos}>Clear All</button>
        <div>Left to do: {todos.length}</div>
    </>
  ); 
}

export default App;
