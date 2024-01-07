import React from 'react'

function Task({ taskId, text,todo,todos,setTodos }) {
  const deleteHandler = ()=>{
    setTodos(todos.filter((el)=> el.id !== todo.id))
    
  }

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    }));
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.status ? "completed":''} `}>{text}</li>
      <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
      <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
    </div>
  );
}


export default Task