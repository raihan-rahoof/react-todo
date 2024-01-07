import React from 'react'
import Task from './Task'

function Todo({todos,setTodos,filterTodos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo)=>(
          <Task todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
        ))}
      </ul>
    </div>
  )
}

export default Todo